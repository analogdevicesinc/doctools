<!-- lastmod 2022-08-05 -->
<!-- image -->

## www.maxim-ic.com

## INTRODUCTION

The DS2715 demonstration board displays all features of the DS2715 NiMH charge controller. The demo board is populated for either linear mode of operation or switched mode of operation. The default configuration for the linear mode kit will charge a 3-cell stack at an approximately 0.5A charge rate with a 130 minute timeout. The default configuration  for  the  switch  mode  kit  will  charge  a  3-cell  stack  at  an  approximately  1.0A  charge  rate  with  a  70 minute timeout. See below for how to change the fault settings of the demo board. Refer to the DS2715 IC data sheet for a complete description of circuit operation.

## ORDERING INFORMATION

| PART           | TYPE                 |
|----------------|----------------------|
| DS2715KLINEAR+ | EV Kit (Linear Mode) |
| DS2715KSWITCH+ | EV Kit (Switch Mode) |

## CONNECTIONS

Connect a 3-cell NiMH stack between the B- and B+ pads observing proper polarity. Connect a recommend or equivalent  characteristic  thermistor  (103AT-2  provided  with  the  kit  board)  at  the  THM  pads.  Make  sure  the thermistor has good thermal conductivity to the cell stack. To charge the cells, connect a 4.5V to 16.5V charge source capable of supplying the desired charge current between CS pad and GND pad. Be careful not to exceed the power rating of the regulating transistor on the linear board. Maxim recommends using a 6V supply for linear mode or a 9V supply for switch mode. An optional load to the cell pack should be connected between the LOAD and GND pads.

<!-- image -->

## DS2715 Evaluation Kit NiMH Battery Pack Charge Controller

## CELL STACK SIZE ADJUSTMENT

R4 and R11 form a voltage divider such that the voltage of a single cell is present on the Vbatt pin. This is required for proper operation of the kit. Adjust R4 as follows for the desired cell stack size:

R = (Cell Stack Size -1) * 100K Ω

The default value for R4 is 200K Ω allowing the demo kit to charge 3 cell stacks.

## CHARGE RATE ADJUSTMENT

The charge rate is determined by the external sense resistor R18 connected between the SNS+ and SNS- pins. The DS2715 will regulate the charge current to maintain a voltage drop of 121mV typical (107mV typical in comparator mode) across the sense resistor during fast charge. The charge rate can therefore be selected by:

Linear Mode:

R = 121mV / Desired Fast Charge Current

Comparator Mode:

R = 107mV / Desired Fast Charge Current

The default value for R18 is 0.25 Ω giving a charge rate of ~484mA in the linear mode kit or 0.1 Ω giving a charge rate of ~1.07A for the switch mode kit.

## CHARGE TIME AND TOP-OFF TIME ADJUSTMENT

Charge time and top-off time are controlled by the external resistor R16 from the R T pin to V SS . Resistors can be selected to support fast-charge time-out periods of 0.5 to 6 hours and top-off charge time-out periods of 0.25 to 3 hours. The programmed charge time approximately follows the equation:

t = 1.5 x R/1000          (time in minutes)

The default value for R16 is 86K Ω giving a charge time out of ~130 minutes in the linear mode kit or 47K Ω giving a charge time out of ~70 minutes for the switch mode kit.

## DS2715 EV KIT SCHEMATIC

<!-- image -->

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                                                                     | PAGES CHANGED   |
|-----------------|-------------------------------------------------------------------------------------------------|-----------------|
| 10/09           | Changed the part number from DS2715K to DS2715KLINEAR+ and DS2715KSWITCH+; added the schematic. | 1, 2            |