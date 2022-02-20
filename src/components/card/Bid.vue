<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Crops</th>
          <th class="text-left">Grade</th>
          <th class="text-left">Bags (90kg)</th>
          <th class="text-left">Region</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.product }}</td>
          <td>{{ item.grade }}</td>
          <td>{{ item.orders }}</td>
          <td>{{ item.region }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          product: 'Maize',
          grade: 'A',
          orders: 200,
          region: 'Kitale',
        },
        {
          product: 'Maize',
          grade: 'A',
          orders: 340,
          region: 'Eldoret',
        },
        {
          product: 'Millet',
          grade: 'B',
          orders: 159,
          region: 'kajiado',
        },
        {
          product: 'Sorgum',
          grade: 'B',
          orders: 60,
          region: 'Narok',
        },
        {
          product: 'Maize',
          grade: 'A',
          orders: 500,
          region: 'Nakuru',
        },
      ],
    }
  },
}
</script>
