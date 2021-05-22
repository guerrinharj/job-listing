<template>

    <div class="bar">

        <div class="bar-container"> 
            <div class="chosen-categories">
                <span v-for="ch in chosen" :key="ch" class="the-category"> 
                    <div class="the-name"> {{ ch }} </div>
                    <div class="the-close" @click="closeCategory(ch)"> 
                        <img :src="close[0]"> 
                    </div> 
                </span>
            </div>
            <div class="clear" @click="clearCategory">
                {{ close[1]}}
            </div>
        </div>

    </div>


    
</template>

<script>
export default {

     computed: {
        jobs() {
        return this.$store.getters.jobs
      },
        close() {
        return this.$store.getters.close
        },
        chosen() {
        return this.$store.getters.chosen
        }
     },

     methods: {
         closeCategory(ch) {
             this.$store.dispatch('closingCategory', {

                 category: ch

             })
         },
         clearCategory() {
             this.$store.dispatch('clearingCategory')
         },

     }
    
}
</script>



<style scoped>

.bar {
    background-color: #fff;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 1px 10px 10px #ccc;
    font-weight: 500;
    font-size: 0.8rem;
    position: relative;
}

.bar-container {
    margin: auto;
    width: 95%;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.chosen-categories {
    display: flex;
    flex-wrap: wrap;
}


.chosen-categories .the-category {
    display: flex;
    align-items: center;
    background-color: hsl(180, 31%, 95%);
    color: hsl(180, 29%, 50%);
    border-radius: 5px;
    font-weight: 700;
    height: 30px;
    margin: 0 20px;
}



.chosen-categories .the-category .the-name {
    width: 70%;
    margin: 0 20px 0 8px;
}

.chosen-categories .the-category .the-close {
    width: 30%;
    padding: 0 8px;
    background-color: hsl(180, 29%, 50%);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease;
} 

.chosen-categories .the-category .the-close:hover {
    background-color: hsl(180, 4%, 10%);
    transition: 0.3s ease;
}

    .clear {
        cursor: pointer;
        color: hsl(180, 29%, 50%);
        font-weight: 700;
    }

    .clear:after {
        display:block;
        content: '';
        border-bottom: solid 1px hsl(180, 29%, 50%);
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    .clear:hover:after {
        transform: scaleX(1);
    }


    @media (max-width: 600px) {

        .bar-container {
            width: 85%;
        }

        .chosen-categories {
                display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .chosen-categories  .the-category {
            margin: 10px;
        }

        .clear {
            color: grey
        }


    }





</style>