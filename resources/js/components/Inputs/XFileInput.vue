 <template>
    <div>
        <div class="my-2">
            <template v-if="!fileSelected && fileSrc">
                <avatar v-if="isAvatar" :src="fileSrc" :color="$attrs.color" size="100" />
                <v-img v-else :src="fileSrc" :aspect-ratio="aspectRatio"></v-img>
            </template>
            <template v-else v-for="(file, i) in files">
                <template  v-if="file.type == 'image'">
                    <avatar v-if="isAvatar" :src="file.src" size="100" :key="i" />
                    <v-img v-else :src="file.src" :aspect-ratio="aspectRatio" :key="i"></v-img>
                </template>
            </template>
        </div>
        <input
            ref="uploader"
            class="d-none"
            type="file"
            :accept="accept"
            @change="getFiles"
        >
        <v-btn
        color="primary"
        class="text-none"
        rounded
        depressed
        :loading="isSelecting"
        @click="onPlaceholderClick"
        >
            <v-icon left>
            cloud_upload
            </v-icon>
            Upload
        </v-btn>
        <v-btn
        color="red"
        class="text-none white--text"
        rounded
        depressed
        @click="removeFile"
        v-if="fileSrc && removable"
        >
            <v-icon left>
            close
            </v-icon>
            Remove
        </v-btn>
    </div>
</template>

<script>
  export default {
    name: 'XFileInput',
    data(){
        return {
            files: [],
            fileSelected: false,
            isSelecting: false,
            fileSrc: this.src,
        }
    },
    props: {
        errors: null,
        label: String,
        rule: String,
        appendIcon: String,
        prependIcon: String,
        src: String,
        isAvatar: {
            type: Boolean,
            default: () => false,
        },
        aspectRatio: {
            type: String,
            default: () => '',
        },
        accept: {
            type: String,
            default: () => 'image/*'
        },
        removable: {
            type: Boolean,
            default: () => false
        }
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

        onPlaceholderClick() {
            this.isSelecting = true
            window.addEventListener('focus', () => {
                this.isSelecting = false
            }, { once: true })

            this.$refs.uploader.click()
        },

        getFiles(e){
            const files = e.target.files;
            if(!files.length){
                 this.fileSelected = false;
                 this.$emit('change', files);
                 return;
             }
            this.files = [];
            this.fileSelected = true;
            
            Array.from(files).forEach(file => {
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

        removeFile(){
            this.$emit('change', null);
            this.fileSrc = null;
            this.fileSelected = true;
            this.files = [];
        }
    }
  }
</script>
