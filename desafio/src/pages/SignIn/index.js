import './style.css';

function SignIn() {
  return (
    <div className='container-sign-in'>

      <div className='login'>

        <form>
          <h2>Login</h2>
          <div>
            <label htmlFor='usuario' >Usuário</label>
            <input type="text" name="usuario" />
          </div>
          <div>
            <label htmlFor='senha' > Senha</label>
            <input type="password" name="senha" />
          </div>
          <button className='btn-login'>Entrar</button>
        </form>

      </div>


    </div>
  );
}

export default SignIn;
