<template>
    <div class="items">
        <ul v-for="item in sortedItems" :key="item.title">
            <div class="listRow" >
                <div class="delete"
                    v-on:click="deleteItem(item.title)">×</div>
                <li :class="item.state ? 'checked' : ''"
                    v-on:click="markDoneUndone(item.title)">
                    {{item.title}}
                    <span class="lineThrough"></span>
                </li>
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
        findItem(title) {
            return this.items.find(x => x.title === title);
        },

        markDoneUndone(title) {
            let item = this.findItem(title);
            item.state = !item.state;
        },

        deleteItem(title) {
            let itemIndex = this.items.findIndex(x => x.title === title);
            this.items.splice(itemIndex, 1);
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
    display: inline-block;
    position: relative;
    font-size: 23px;
}

.items .checked {
    color: grey;
}

.items .lineThrough {
    width: 0;
    transition: width 1s;
}

.items li.checked .lineThrough {
    background-color: grey;
    bottom: 0;
    display: block;
    height: 1px;
    margin: auto 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.delete {
    font-size: 25px;
    line-height: 15px;
    display: inline-block;
    width: 15px;
    height: 15px;
    top: 0px;
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
    float: right;
    top: 5px;
    position: relative;
}

.delete, .checkBubble {
    transition: all 0.75s ease;
}

.checkBubble:hover, .delete:hover {
    box-shadow: 0px 0px 10px 2px #086972;
}

.items .checkBubble.checked{
    background-color: #87dfd6;
    border-color: #87dfd6;
}

</style>