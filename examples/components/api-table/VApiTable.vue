<template>
  <table class="h-table-simple">
    <thead>
      <tr>
        <th v-for="(item, index) in thead" :key="index">{{item.label}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(dataItem, dataIndex) in data" :key="dataIndex">
        <td v-for="(theadItem, theadIndex) in thead" :key="theadIndex.name">
          <span
            v-if="dataItem[theadItem.name] !== '' && dataItem[theadItem.name] !== null"
            :class="{'parameter':theadItem.name === 'parameter', 'dataTypes':theadItem.name === 'dataTypes'}"
          >{{dataItem[theadItem.name] }}</span>
          <span v-else>—</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "VApiTable",
  props: {
    thead: {
      type: Array,
      default: function() {
        return [
          { label: "参数", name: "parameter" },
          { label: "说明", name: "explain" },
          { label: "类型", name: "dataTypes" },
          { label: "可选值", name: "optionalValues" },
          { label: "默认值", name: "defaultValue" }
        ];
      }
    },
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.h-table-simple {
  width: 100%;
  border-collapse: collapse;
  thead {
    text-align: left;
    tr {
      border-bottom: 1px solid #dcdfe6;
      th {
        padding: 15px;
        max-width: 250px;
        font-size: 14px;
        font-weight: 400;
        color: #909399;
        white-space: nowrap;
        &:first-child {
          padding-left: 10px;
        }
      }
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid #dcdfe6;
      td {
        padding: 15px;
        // max-width: 250px;
        font-size: 14px;
        font-weight: 400;
        color: #606266;
        white-space: normal;
        &:first-child {
          padding-left: 10px;
        }
        .parameter {
          color: #003a8c;
        }
        .dataTypes {
          color: #bd6f9c;
        }
      }
    }
  }
}
</style>
