﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Tetris2.Forms.HelpForms;

namespace Tetris2.Forms.User
{
    public partial class SoundSettingsForm : Form
    {
        private PlayerMainForm pmf;
        public SoundSettingsForm(PlayerMainForm _pmf)
        {
            InitializeComponent();
            pmf = _pmf;
        }

        private void btnGoHome_Click(object sender, EventArgs e)
        {
            pmf.Show();
            this.Dispose();
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            pmf.Show();
            pmf.setVolume((int)(tbMusic.Value * tbGeneral.Value / 100.0),
                (int)(tbEffects.Value * tbGeneral.Value / 100.0));
            this.Dispose();
        }

        private void SoundSettingsForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            Application.Exit();
        }

        private void btn_question_Click(object sender, EventArgs e)
        {
        }

        private void btn_inquiry_Click(object sender, EventArgs e)
        {
            new AboutDevelopersForm().ShowDialog();
        }
    }
}
