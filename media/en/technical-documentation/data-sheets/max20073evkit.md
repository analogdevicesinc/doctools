<!-- lastmod 2022-08-02 -->
## MAX20073 Evaluation Kit

## General Description

The MAX20073 evaluation kit demonstrates the performance  and  behavior  of  the  MAX20073,  a  part in  the  MAX20015-MAX20018/MAX20073/MAX20074 family of pin-compatible, low-voltage, step-down switching regulator ICs.

The regulator delivers current up to 2A at an output voltage between 0.5V and 3.8V. The device operates from a  2.7V  to  5.5V  input  supply  voltage,  making  it  ideal  for post-regulation  and  point-of-load  applications.  The  total error  over  load,  line,  and  temperature  ranges  is  1.5%. The base switching frequency is 2.2MHz, which allows for all-ceramic  capacitor  application  designs.  The  regulator can either be synchronized to an external clock or placed in  a  power-saving  skip  mode  for  increased  efficiency  at light loads.

The regulator provides an enable input and fault flag  output.  The  output  voltage  can  be  set  using  an external resistor-divider and an internal 0.5V reference.  Alternatively,  it  can  be  programmed  at  the factory  for  a  specific  output  voltage,  achieving  1.5% output  accuracy  without  resorting  to  expensive  0.1% resistors. The soft-start time and fault hold time can also be factory programmed.

The  regulators  include  overtemperature  shutdown  and overcurrent  limiting.  They  are  designed  to  continuously operate over the -40°C to +125°C ambient temperature.

Ordering Information appears at end of data sheet.

Evaluates:  MAX20073

## Benefits and Features

- 2.7V to 5.5V Input Voltage Range
- 0.5V to 3.8V Output Voltage Range
- Set by External Resistive Divider or Preprogrammed at Factory
- Base EV Kit Configuration Set to 1.8V/2A Output
- High-Frequency Switching (2.2MHz) Allows for an All-Ceramic Capacitor Design
- Continuously Produces Output Current Up to 2A
- Compact Solution Size
- Externally Adjustable Output Implementation Fits Inside 65mm 2  Area
- Preprogrammed Output Implementation Fits Inside 55mm 2  Area

## Quick Start

## Required Equipment

- MAX20073 EV kit
- 5V, 2A power supply
- Digital multimeter
- 0.9Ω, 20W power resistor or 2A electronic load

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Remove the jumper from JU1 (EN). Jumpers JU2 and JU3 can either be removed or populated.
- 2) Connect  the  power  supply  to  VSUP  and  GND  and activate the supply.
- 3) Use the multimeter to verify 5V input voltage and 0V output voltage.
- 4) Replace the jumper on JU1 (EN).
- 5) Use the multimeter to verify output voltage is 1.8V.
- 6) Connect load (either resistive or electronic) to VOUT and GND.
- 7) Use the multimeter to verify output voltage is still 1.8V.

<!-- image -->

## Detailed Description of Hardware

The  MAX20073  EV  kit  is  fully  assembled  and  tested. The EV kit comes with the MAX20073ATBA/V+ installed. Other regulators in the family can be tested on the same EV kit with IC replacement of U1. Changing either the IC or the output configuration may also require changing the external  components.  Refer  to  the  MAX20073  IC  data sheet for guidance on selecting the proper components.

## EV Kit Interface

The VSUP and GND test points provide power to the EV kit.  Capacitor  C7  emulates  the  output  capacitance  of  a primary regulator feeding the EV kit. Additional capacitance can be connected across VSUP and GND, if desired. The regulator provides output power at the OUT and GND pins. The standard 1.8V configuration requires only one output capacitor,  but  additional  capacitor  lands  are  provided  in case lower output voltages are tested.

The  IC  is  enabled  by  populating  a  shunt  across  JU1  or applying  a  logic-high  voltage  at  the  EN  test  loop.  The EN pin has a weak internal pulldown, so leaving the line disconnected  causes  the  regulator  to  shut  off.  Upon enabling, the output voltage ramps upwards from zero to the target output over the soft-start time.

## Synchronization and Switching

The  IC  has  the  ability  to  operate  in  either  forced-PWM (FPWM)  mode  or  skip  mode.  Removing  the  jumper from  JU2  causes  the  device  to  enter  skip  mode  at  low output  currents  to  boost  efficiency  (a  weak  internal  pulldown  on  the  SYNC  pin  causes  the  device  to  default  to this  mode  when  the  SYNC  pin  is  lotherwise  left  open). Populating  a  jumper  on  JU2  or  applying  a  logic-high signal to the SYNC pin causes the device to enter FPWM mode. Also, a square wave can be applied to the SYNC pin to cause the device to switch at that frequency.

The MAX20073 can be programmed at the factory to output its switching frequency on the SYNC pin (the default device  populated  on  the  EV  kit  does  not  behave  in  this manner). ICs configured this way always operate in FPWM mode.  The  square-wave  output  is  offset  180°  from  the device's switching behavior.

A  spread-spectrum  feature  is  available  to  reduce  peak EMI emissions. Placing a jumper on JU3 activates spread spectrum  on  the  power  MOSFET  switching  frequency. Removing  the  jumper  from  JU3  changes  back  to  fixedfrequency  switching  (the  SSEN  pin  on  the  device  has a  weak  internal  pulldown  for  a  default  state  of  spread spectrum  deactivated  if  the  pin  is  left  open).  Applying  a square wave to the SYNC pin for synchronization overrides the spread-spectrum behavior.

## Fault Flag Signal ( RESET )

The device signals the presence/absence of fault conditions through the RESET pin. An external pullup resistor on the EV kit pulls the pin up to the supply voltage. The pin has an open-drain configuration for the signal to interface with other logic voltage levels. Under fault conditions, the  open-drain  FET  closes  and  pulls  the  line  down  to ground. Under normal conditions, the FET opens and the line is pulled up.

## PCB Layout Guidelines

Proper  PCB  layout  of  the  system  is  crucial  for  good performance. The loop area created by the DC-DC components must be minimized as much as possible. Place the PV (input) capacitor, power inductor, and output capacitor very close to the device. Increasing the loop area increases EMI  and  switching  jitter,  and  can  also  degrade  regulation  and  transient  response. The  optimal  positioning  and routing for the three components is implemented on the EV kit and described below.

Place  several  vias  in  the  exposed  pad  (EP)  of  the device. Connect  EP  to ground, both on the outer layer  and  to  all  inner  ground  layers  (using  said  vias). A  grid  of  small  vias  (2x3  grid  of  0.010in  diameter)  is recommended.  Connecting  EP  to  multiple  ground  layers provides sufficient thermal sinking.

A  low-impedance  ground  connection  to  the  device  and its associated components is critical. Use a size 1206 PV capacitor  next  to  the  device,  directly  adjacent  to  the  PV and GND pins. Route the LX trace out from the device, going underneath the PV capacitor, to the inductor. Place the output capacitor(s) GND pins next to the PV capacitor  GND pin. The layer directly  below  the  device  and  its circuitry  needs  to  be  a  large  ground  plane.  Do  not use  separate  analog  and  power  grounds;  use  a  single common  ground,  as  the  high-frequency  return  current flows  on  the  ground  plane  directly  below  the  associated components and traces and away from other circuitry. Use several  vias  next  to  the  capacitor  and  device  GND  pins for low-impedance connections to the ground plane (these are  in  addition  to  the  vias  in  the  device  EP  mentioned previously).

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20073EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX20073 EV Kit Component List

|   ITEM |   QTY | REFERENCE   | VALUE   | DESCRIPTION                                       | MANUFACTURER PART NUMBER   |
|--------|-------|-------------|---------|---------------------------------------------------|----------------------------|
|      1 |     1 | C1          | 4.7u    | Capacitor, ceramic, 4.7μF, 10V, X7R, 1206 size    | Murata GCM31CR71C475KA37L  |
|      2 |     1 | C2          | 1.0u    | Capacitor, ceramic, 1.0μF, 10V, X7S, 0402 size    | Murata GCM155C71A105KE38D  |
|      3 |     1 | C3          | 22p     | Capacitor, ceramic, 22pF, 50V, C0G/NP0, 0402 size | TDK CGA2B2C0G1H220J050BA   |
|      4 |     1 | C4          | 47u     | Capacitor, ceramic, 47μF, 6.3V, X6S, 1206, size   | Murata GRT31CC80J476KE13L  |
|      5 |     2 | C5, C6      | N.C.    |                                                   |                            |
|      6 |     1 | C7          | 47u     | Capacitor, ceramic, 47μF, 10V, X6S, 1210, size    | Murata GRT32EC81A476KE13L  |
|      7 |     1 | L1          | 1.0u    | Inductor, thin - film, 1.0μH, 2.5mm x 2.0mm       | TDK TFM252010ALMA1R0M      |
|      8 |     2 | R1, R3      | 10      | Resistor, 10Ω, 1%, 0402 size                      | any                        |
|      9 |     1 | R2          | 10k     | Resistor, 20kΩ, 1%, 0402 size                     | any                        |
|     10 |     1 | R4          | 39.2k   | Resistor, 39.2kΩ, 1%, 0402 size                   | any                        |
|     11 |     1 | R5          | 15k     | Resistor, 15kΩ, 1%, 0402 size                     | any                        |

## MAX20073 EV Schematic

<!-- image -->

│

## MAX20073 EV PCB Layouts

Top Layout

<!-- image -->

│

## MAX20073 EV PCB Layouts (continued)

Bottom Layout (Inner Ground and Power Layers Not Shown)

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates:  MAX20073