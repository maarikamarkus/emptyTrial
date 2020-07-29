<template>
    <div class="items">
        <ul v-for="item in sortedItems" :key="item.title">
            <div class="listRow" >
                <div class="delete">×</div>
                <li :class="item.state ? 'checked' : ''"
                    v-on:click="markDoneUndone(item.title)">{{item.title}}</li>
                <div :class="item.state ? 'checkBubble checked' : 'checkBubble'"
                    v-on:click="markDoneUndone(item.title)"></div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["items"],

    data() {
        return {
            
        }
    },

    methods: {
        markDoneUndone(title) {
            let item = this.items.find(x => x.title === title);
            item.state = !item.state;
        }
    },

    computed: {
        sortedItems() {
            return this.items.concat().sort((a, b) => {
                if (!a.state && b.state) {
                    return -1;
                } else {
                    return 0;
                }
            })
        }
    }
}
</script>

<style>
.listRow {
    cursor: pointer;
    padding: 5px;
}

.items {
    min-height: 123px;
}

.items ul {
    padding-inline-start: 0px;
}

.items ul li {
    color: black;
    list-style: none;
    display: inline;
}

.items .checked {
    text-decoration: line-through;
    color: grey;
}

.delete {
    font-size: 25px;
    line-height: 15px;
    display: inline-block;
    width: 15px;
    height: 15px;
    top: 5px;
    margin-right: 11px;
    position: relative;
    border:1px solid #086972;
    border-radius: 100%;
    color: #086972;
}

.checkBubble {
    border:1px solid #086972;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    display: inline-block;
    transition: all 0.75s ease;
    float: right;
}

.checkBubble:hover {
    box-shadow: 0px 0px 10px 2px #086972;
}

.items .checkBubble.checked{
    background-color: #87dfd6;
    border-color: #87dfd6;
}

</style>