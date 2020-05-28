 <template>
    <div>
        <v-container mb-2>
            <template v-for="(file, i) in files">
                <v-img v-if="file.type == 'image'" :src="file.src" aspect-ratio="1.7" :key="i"></v-img>
            </template>
        </v-container>
         
        <v-file-input
            counter
            :label="label"
            v-bind="$attrs"
            :prepend-icon="prependIcon"
            :append-icon="appendIcon"
            outlined
            @change="getFiles"
           :error="errorString ? true : false"
           :error-messages="errorString ? errorString : ''"

        >
            <template v-slot:selection="{ index, text }">
                <v-chip
                    color="primary accent-4"
                    dark
                    label
                    small
                >
                    {{ text }}
                </v-chip>
            </template>
        </v-file-input>    
    </div>
</template>

<script>
  export default {
    name: 'XFileInput',
    data(){
        return {
            files: [],
        }
    },
    props: {
        errors: null,
        label: String,
        rule: String,
        appendIcon: String,
        prependIcon: String,
    },
    computed: {
        errorString() {
        if (typeof this.errors === 'string') return this.errors;
        if (!(this.errors && this.errors[this.$attrs.name])) return null;
        const error = this.errors[this.$attrs.name];
        return error.constructor === Array ? error[0] : error;
        },
    },

    methods:{
         getFiles(files){
            this.files = [];
            files = files instanceof Array ? files : [files];
            
            files.forEach(file => {
                const imageRegex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$/;
                let type = 'unknown'
                if (imageRegex.test(file.name.toLowerCase())){//If a valid image
                    type = 'image';
                }
                 const reader = new FileReader();
                    reader.onload = (e) => {
                        this.files.push({
                            type,
                            src: e.target.result,
                        })
                    }
                 reader.readAsDataURL(file);
            });
            this.$emit('change', files);
        },
    }
  }
</script>
