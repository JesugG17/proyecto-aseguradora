<template>
    <div class="form-wrapper">
        <div class="header"></div>
        <div class="form-container">
            <h2>Datos del vehículo</h2>
            <!-- @submit.prevent="submitForm" -->
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <label for="brand">Marca</label>
                        <input type="text" v-model="brand" id="brand" placeholder="Marca" />
                    </div>
                    <div class="form-group">
                        <label for="model">Modelo</label>
                        <input type="text" v-model="model" id="model" placeholder="Modelo" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="id">Placas</label>
                        <input type="text" v-model="id" id="id" placeholder="Placas" />
                    </div>
                    <div class="form-group">
                        <label for="year">Año</label>
                        <input type="text" v-model="year" id="year" placeholder="Año" />
                    </div>
                </div>
            </form>
            <!-- <input type="file" id="fileInput" accept=".jpg,image/jpg" style="display: none;">
            <div class="form-row">
                <button onclick="document.getElementById('fileInput').click();" class="photo-button">+ Agregar fotos
                    del vehículo</button>
                <button type="submit" class="pay-button">PAGAR</button>
            </div> -->
            <div class="form-row">
                <input type="file" ref="fileInput" style="display: none;" accept=".jpg,image/jpg"
                    @change="handleFileInputChange">
                <button class="photo-button" @click="openFileInput($event)">+ Agregar fotos
                    del vehículo</button>

                <div id="preview">
                    <p>Imagenes seleccionadas</p>
                    <img v-for="(image, index) in images" :key="index" class="preview-image" :src="image"
                        @click="showImage(image)">
                </div>
                <!-- <div v-if="selectedImage" id="imageModal" style="display: none;">
                <img :src="selectedImage" style="max-width: 100%; max-height: 100%;">
                <button @click="closeImageModal">Cerrar</button>
            </div> -->
                <button type="submit" class="pay-button" @click="submitForm()">PAGAR</button>
            </div>
        </div>
    </div>
</template>

<script>
import {httpClient} from '../services/httpClient.js'
export default {
    data() {
        return {
            brand: '',
            model: '',
            id: '',
            year: '',
            images: [],
            selectedImage: null
        }
    },
    methods: {
        submitForm() {
            let bandera = true;
            if (!this.brand || this.brand.trim().length === 0) {
                bandera = false;
            }
            if (!this.model || this.model.trim().length === 0) {
                bandera = false;
            }
            if (!this.id || this.id.trim().length === 0) {
                bandera = false;
            }
            if (!this.year || this.year.trim().length === 0 || isNaN(this.year)) {
                bandera = false;
            }
            if(this.images.length !=2){
                alert("Favor de incluir dos imagenes de tu automovil");
                bandera = false;
            }
            if (bandera) {
                alert(`Marca: ${this.brand}, Modelo: ${this.model}, Placas: ${this.id}, Año: ${this.year}`); 
                const body = {
                    id:this.id,
                    model:this.model,
                    brand: this.brand,
                    year: this.year,
                    user: 1   
                }
                //Colocar el redireccionamiento a la siguiente ventana: Formulario de la tarjeta.
                httpClient.post("/car/create-car",body)
                .then(console.log("200: OK"))
                .catch(console.log("Error en la peticion"));
            }
        },
        openFileInput(event) {
            event.preventDefault();
            this.$refs.fileInput.click();
        },
        addPhotos() {
            alert('Funcionalidad para agregar fotos del vehículo');
        },
        handleFileInputChange(event) {
            const file = event.target.files[0];
            if (this.images.length > 1) {
                alert('Solo puedes seleccionar hasta 2 imágenes.');
                return;
            }
                const reader = new FileReader();
                reader.onload = () => {
                    this.images.push(reader.result);
                };
                reader.readAsDataURL(file);
        },
        showImage(image) {
            this.selectedImage = image;
            document.getElementById('imageModal').style.display = 'block';
        },
        closeImageModal() {
            this.selectedImage = null;
            document.getElementById('imageModal').style.display = 'none';
        }
    }
};
</script>

<style scoped>
.preview-image {
    cursor: pointer;
    max-width: 100px;
    max-height: 100px;

}

.form-wrapper {
    max-width: 900px;
    margin: 20px auto;
    border-radius: 8px;
    overflow: hidden;
    height: 450px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
    height: 50px;
    background: linear-gradient(to right, #66bb6a, #43a047);
}

.form-container {
    background: #ffffff;
    padding: 20px;
    border-radius: 0 0 8px 8px;
}

h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: left;
}

.form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.form-group {
    flex: 1;
    margin-right: 100px;
}

.form-group:last-child {
    margin-right: 0;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input {
    width: 80%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-group input:focus {
    border: 1px solid #ccc;
    border-radius: 4px;
}

.photo-button,
.pay-button {
    display: block;
    width: 200px;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.photo-button {
    height: 50px;
    background-color: #e0f7fa;
    color: #007bff;
    border: 1px solid #007bff;
    margin-right: 10px;
}

.pay-button {
    background-color: #4CAF50;
    color: white;
    position: relative;
    margin-top: 150px;
    right: 20px;
    bottom: 20px;
}

.photo-button:hover {
    background-color: #007bff;
    color: white;
}

.pay-button:hover {
    background-color: #45a049;
}

.form-container {
    position: relative;
}
</style>