<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div ref="chart"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    props:['xData','data'],
    watch: {
        xData(){
            this.refresh()
        },
        data() {
            this.refresh()
        }
    },
    mounted() {
        this.refresh()
    },
    beforeUnmount() { 
        if (this.chartInstance) {
            this.chartInstance.dispose();
        }
    },
    methods: {
        refresh() {
            // let chart = echarts.init(this.$refs.chart);
            if (!this.chartInstance) {
                // Initialize a new instance if it doesn't exist.
                this.chartInstance = echarts.init(this.$refs.chart);
            }
            this.chartInstance.clear()
            this.chartInstance.setOption({
                xAxis:{
                    data:this.xData
                },
                yAxis: {
                    type: 'value'
                },
                series:{
                    name:this.name,
                    type:'line',
                    data:this.data
                }
            });
        }
    },
    data() {
        return {
            chartInstance: null,
        };
    }
}
</script>