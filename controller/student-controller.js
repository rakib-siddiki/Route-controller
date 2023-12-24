import express from "express";

const allStudent = (req, res) => {
  const { id } = req.params;
  res.send("student " + id);
};

const createStuent = (req, res) => res.send(req.body);
const updateStudent = (req, res) => res.send("update student");
const deleteStudent = (req, res) => res.send("update student");

export{allStudent,createStuent,updateStudent,deleteStudent}