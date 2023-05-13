<template>
    <section>
      <div class="container">
        <h2 class="mt-3 mt-lg-5">Website Users</h2>
        <router-link to="/createuser">
  <button type="button" class="btn btn-primary mt-3">
    Add user
  </button>
</router-link>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
    </section>
  </template>
  
  <script>
  
  export default {
    name: "UserList"
  };
  </script>
  
  <style>
  </style>