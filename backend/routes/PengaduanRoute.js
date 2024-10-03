import express from "express";
import {getPengaduan, getPengaduanById, createPengaduan, updatePengaduan, deletePengaduan} from "../controllers/PengaduanController.js";

const router = express.Router();

router.get('/pengaduan', getPengaduan);
router.get('/pengaduan/:id', getPengaduanById);
router.post('/pengaduan', createPengaduan);
router.patch('/pengaduan/:id', updatePengaduan);
router.delete('/pengaduan/:id', deletePengaduan);

export default router;