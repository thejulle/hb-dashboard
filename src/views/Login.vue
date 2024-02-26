<script setup>
</script>

<template>
  <div class="login">
    <div class="login__inner">
      <h1>Log In</h1>
      <form action="/" method="post">
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <div class="checkbox">
          <input type="checkbox" id="remember-me" name="drone" value="remember-me">
          <label for="remember-me">Remember me</label>
        </div>
        <input type="submit" class="btn" value="Log In">
      </form>
      <a href="#" class="btn">Create Account</a>
      <div class="login__bottom">
        <a href="#">Forgot Password?</a>
        <a href="#">Create Doctor's Account</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  &__inner {
    width: 482px;
    padding: 32px;
    background: var(--white);
    border-radius: 18px;
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.4);
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 700;
    font-family: var(--font-body);
  }

  .checkbox {
    display: flex;
    gap: 18px;
    align-items: center;
    margin-top: 1rem;
  }

  label {
    font-size: 18px;
    letter-spacing: -.014em;
    cursor: pointer;
  }

  input {
    &[type=email],
    &[type=password] {
      width: 100%;
      margin-bottom: 18px;
      padding: 14px 0;
      font-size: 2rem;
      line-height: 1.1;
      font-family: var(--font-heading);
      border: 0;
      border-bottom: 1px solid #A6A6A6;

      &::placeholder {
        color: #A6A6A6;
      }
    }

    &[type=checkbox] {
      width: 2rem;
      height: 2rem;
      margin: 0;
    }

    &[type=submit] {
      width: 100%;
      margin: 34px 0 1rem;
      cursor: pointer;
    }
  }

  a.btn {
    width: 100%;
    background: var(--black);
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 36px;

    a:first-child {
      color: var(--black);
    }
  }
}
</style>