import React from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'

export default function Log() {
      return (
            <div className="Log">
                  <h2>S'enregistrer</h2>
                  <RegisterForm />
                  <h2>Se connecter</h2>
                  <LoginForm />
            </div>
      )
}
