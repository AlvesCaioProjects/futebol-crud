import express from 'express';
import { getTeams, getTeam, createTeam, updateTeam, deleteTeam } from '../controllers/teamController.js';

const router = express.Router();
 
// List teams
router.get('/teams', getTeams);
// Team details
router.get('/team/:id', getTeam);
// Add team
router.post('/teams', createTeam);
// Edit team
router.put('/teams/:id', updateTeam);
// Delete team
router.delete('/teams/:id', deleteTeam);

export default router;