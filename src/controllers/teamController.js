import supabase from '../services/supabaseService.js';

// List teams
const getTeams = async (req, res) => {
    const { data, error } = await supabase.from('teams').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// Team detail
const getTeam = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('teams').select('*').eq('id', id).single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// Add team
const createTeam = async (req, res) => {
    const { name, logo, description, country } = req.body;
    const { data, error } = await supabase.insert([{ name, logo, description, country }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
};

// Edit team
const updateTeam = async (req, res) => {
    const { id } = req.params;
    const { name, logo, description, country } = req.body;
    const { data, error } = await supabase.update({ name, logo, description, country }).eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// Delete team
const deleteTeam = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('teams').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'Time excluído com sucesso!' });
};

export { getTeams, getTeam, createTeam, updateTeam, deleteTeam };