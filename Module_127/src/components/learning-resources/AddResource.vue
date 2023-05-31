<template>
    <base-card>
        <form @submit="">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" v-model="title">
            </div>
            <div class="form-control">
                <label for="title">Description</label>
                <textarea rows="3" id="description" name="description" v-model="description">
                </textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" name="link" v-model="link">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>

export default {
    
}

</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>