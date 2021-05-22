<template>

    <div class="item" v-if="appear" :class="{line: featured}">

        <div class="line" v-if="featured"> </div>

        <div class="item-container"> 

            <div class="logo-info-area">

                <div class="logo-area"> 
                    <img :src="logo"> 
                </div>

                <div class="info-area">
                    <div> 
                        <span class="company"> {{ company }}  </span>
                        <span class="newer" v-if="newer"> New! </span> 
                        <span class="featured" v-if="featured"> Featured </span>
                    </div>
                    <div> 
                       <span class="position"> {{ position }} </span>
                    </div>
                    <div> 
                        <ul>
                            <li class="info" v-for="i in info" :key="i"> {{ i }}  </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="categories-area"> 
                <span v-for="cat in categories" :key="cat" @click="chooseCategory(cat)"> {{ cat }} </span>
            </div>

        </div>
    </div>
    
</template>

<script>


export default {

    props: ['logo', 'company', 'newer', 'featured', 'position', 'info', 'categories', 'appear'],
    methods: {
        chooseCategory(cat) {

            this.$store.dispatch('choosingCategory', {

                category: cat,
                company: this.company

            })
        },

    }
    
}
</script>

<style scoped>

.item {
    background-color: #fff;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 1px 10px 10px #ccc;
    font-weight: 500;
    font-size: 0.8rem;
    position: relative;
}

.line {

    border-left: solid 6px hsl(180, 29%, 40%);

}

.item-container {
    margin: auto;
    width: 90%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-info-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-area {
    margin-right: 20px;
}

.info-area div {
    margin: 1.2rem
}

.company {
    font-weight: 700;
    color: hsl(180, 29%, 50%)
}

.newer, .featured {
    background-color:  hsl(180, 29%, 50%);
    color: white;
    padding: 10px 8px;
    border-radius: 20px;
    margin: 0 2px 0 8px;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
}



.featured {
    background-color: hsl(180, 14%, 20%)
}

.position {
    font-weight: 700;
    font-size: 1.1rem;
}

ul {
    display: flex;
    padding: 0
}

li:first-child {
    list-style-type: none;
}

.info {
    margin: 0 20px 0 0;
    opacity: 0.5
}

.categories-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.categories-area span {
    margin: 0 10px;
    background-color: hsl(180, 31%, 95%);
    color: hsl(180, 29%, 50%);
    padding: 10px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s ease;
}

.categories-area span:hover {
    background-color: hsl(180, 14%, 20%);
    color: hsl(180, 31%, 95%);
    transition: 0.3s ease;
}


@media (max-width: 600px) {

    .item {
        margin: 8vh 0;
    }

    .line {
        width: 5px
    }

    .item-container {
        flex-wrap: wrap;
        width: 85%;   
       
    }

    .logo-info-area {
        border-bottom: solid 1px #ccc
    }


    .logo-area {
        position: absolute;
        top: -7%;
    }

    .logo-area img {
        width: 50%
    }



    .info-area div {
     margin: 1.5rem 1.2rem;
    }

    .info {
        font-size: 12px;
        margin: 0 20px 0 0
    }

    .categories-area {
        flex-wrap: wrap;
        width: 80%;
        justify-content: flex-start;
        
    }

    .categories-area span {
        margin: 10px 5px
    }


}



</style>