<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-icon small class="mr-3" color="primary" v-bind="attrs" v-on="on">
        mdi-eye
      </v-icon>
    </template>
    <v-card class="accent">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title> INVOICE </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-title class="ma-5" large> MY INVOICE </v-card-title>

      <v-card ref="content" width="80%" class="mx-auto pa-10">
        <v-row>
          <v-col cols="auto">
            <span>Farmer's Name</span> <br />
            <span>Westlands, Kenya</span> <br />
            <span>P: +254 (7) 8736 4775</span>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="auto">
            <v-btn @click="pdfDownload" color="secondary" dark>
              Download PDF
              <v-icon class="pa-3">mdi-file-pdf-box-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <br />

        <v-divider></v-divider>

        <br />
        <v-row>
          <v-col style="font-size: 15px" class="auto">
            <p><strong>Invoice to:</strong></p>
            <span>Customer Name : Doughlas Mwangi</span> <br />
            <span>Client Phone No. : 0736437676</span> <br />
            <span>Delivery location : Muthith Road</span> <br />
            <span>Client Reg No. : KBU 234B</span>
          </v-col>

          <v-spacer></v-spacer>

          <v-col class="auto">
            <p>
              <strong>Date : <span class="pl-4">March 23, 2019</span></strong>
            </p>
            <p>
              <strong>Invoice No : <span class="pl-4">#12647368</span> </strong>
            </p>
          </v-col>
        </v-row>

        <br /><br />
        <template class="pb-10">
          <div>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :hide-default-footer="true"
            >
            </v-data-table>
            <br /><br />
            <v-row style="font-size: 15px" class="text-right pt-5 pr-10">
              <v-col cols="12"> <strong>Sub Total</strong> : Kshs 5,000 </v-col>
              <v-col cols="12"> <strong>VAT</strong> : 18.5% </v-col>

              <v-col style="font-size: 20px" cols="12">
                <strong>Kshs 30,000</strong>
              </v-col>
            </v-row>
          </div>
        </template>

        <br />
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.1/jspdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.1/jspdf.debug.js"></script>

<script>
export default {
  data() {
    return {
      dialog: false,

      headers: [
        {
          text: 'Vehicle Reg No.',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Make & Model', value: 'calories', sortable: false },
        { text: 'Starting Date', value: 'fat', sortable: false },
        { text: 'End Date', value: 'carbs', sortable: false },
        { text: 'No. of Days', value: 'protein', sortable: false },
        { text: 'Amount', value: 'iron', sortable: false },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
      ],
    }
  },
  methods: {
    pdfDownload() {
      const doc = new jsPDF()

      const html = this.$refs.content.innerHTML

      doc.fromHTML(html, 15, 15, {
        width: 150,
      })
      doc.save('sample.pdf')
    },

    save() {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancel() {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    open() {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    close() {
      console.log('Dialog closed')
    },
  },
}
</script>
