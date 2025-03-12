import { pool } from "../db/db.js";

export const getUsers = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};


export const getUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ msj: "user no found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener usuario" });
  }
}

export const addUser = async (req, res) => {
    const { name, email } = req.body;
    try {

      const result = await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email",
        [name, email]
      );
  
      // Devolver el primer usuario insertado
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear usuario" });
    }
  }

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING id" ,[id]
      );
      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json({ message: `Usuario con id ${id} eliminado` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al eliminar usuario" });
    }
  }

  export const updateUser =  async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      const result = await pool.query(
        `UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email`,
        [name, email, id]
      );
      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al actualizar usuario" });
    }
  }