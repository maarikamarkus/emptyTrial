<template>
    <div>
        <div class="date">
            <!--<h1>{{date}}</h1>-->
            <div id="dayOfMonth">{{dayOfMonth}}</div>
            <div id="secondColumn">
                <div id="month">{{month}}</div>
                <div id="year">{{year}}</div>
            </div>
            <div id="dayOfWeek">{{dayOfWeek}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        let date = new Date(Date.now());
        return {
            date: date.toDateString(),
            dayOfWeek: date.toLocaleString('en-US', {weekday: 'long'}),
            dayOfMonth: date.getUTCDate(),
            month: date.toLocaleString('en-US', {month: 'short'}),
            year: date.getFullYear()
        }
    }
}
</script>

<style>
.date {
    height: 50px;
    text-transform: uppercase;
}

#dayOfMonth, #dayOfWeek, #secondColumn {
    display: inline-block;
}

#dayOfMonth {
    font-size: 41px;
    height: 100%;
}

#month {
    font-size: 13px;
}

#dayOfWeek {
    top: 20px;
    float: right;
}
</style>
