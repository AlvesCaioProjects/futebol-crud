const express = require('express');
const { getTeams, getTeam, createTeam, updateTeam, deleteTeam } = require('../controllers/teamController');
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

module.exports = router;