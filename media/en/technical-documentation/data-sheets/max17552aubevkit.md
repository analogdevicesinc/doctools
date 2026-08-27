<!-- lastmod 2022-10-10 -->
## MAX1752 5V Output Evaluation Kit (µMAX)

## General Description

The  MAX17552  5V  evaluation  kit  (EV  kit)  (µMAX ® )  is a  fully  assembled  and  tested  circuit  board  that  demonstrates  the  performance  of  the  MAX17552  60V,  100mA ultra-small, high-efficiency, synchronous step-down DC-DC  converter  in  a  10-pin  µMAX  package.  The  EV kit  operates  over  a  wide  input  voltage  range  of  6V  to 60V and provides up to 100mA load current at 5V output.  It  draws  only  26µA  supply  current  under  no-load conditions  (EN/UVLO  connected  to  V IN ).  The  EV  kit  is programmed  to  switch  at  a  frequency  of  220kHz  and delivers  a  peak  efficiency  of  93%  with  the  supplied components. The device is simple to use and easily configurable  with  minimal  external  components.  It  features cycle-by-cycle peak current-limit protection, undervoltage lockout and thermal shutdown.

The EV kit comes installed with the MAX17552AUB+ in an  10-pin  (3mm  x  3mm),  lead(Pb)-free/RoHS-compliant µMAX package.

## Features and Benefits

- 6V to 60V Input Voltage Range
- 5V Output, 100mA Continuous Current
- 93% Peak Efficiency
- 26µA No-Load Supply Current
- EN/UVLO for On/Off Control and Programmable Input Undervoltage Lockout
- Programmable Switching Frequency
- Internal or Programmable Soft-Start
- PFM or Forced-PWM Mode of Operation
- RESET Output
- Peak Current-Limit Protection
- Thermal Shutdown
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

μMAX is a registered trademark of Maxim Integrated Products, Inc.

## Evaluates: MAX1752 (µMAX) in 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17552 5V EV kit (µMAX)
- 60V adjustable, 0.5A DC power supply
- Electronic load up to 100mA
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed on jumpers JU1 and JU2 (EN/UVLO).
- 2) Verify that jumper JU3 (MODE-PFM operation) is open.
- 3) Set  the  electronic  load  to  constant-current  mode, 100mA, and disable the electronic load.
- 4) Connect the electronic load's positive terminal to the VOUT PCB pad. Connect  the  negative  terminal  to the GND PCB pad.
- 5) Connect the  voltmeter  across  the  VOUT  and  GND PCB pads.
- 6) Set  the  power-supply  output  to  24V.  Disable  the power supply.
- 7) Connect  the  power-supply  output  to  the  VIN  PCB pad.  Connect  the  supply  ground  to  the  GND  PCB pad.
- 8) Turn on the power supply.
- 9) Enable  the  electronic  load  and  verify  that  output voltage is 5V with respect to GND.
- 10)  Vary the input voltage from 6V to 60V.
- 11)  Vary the load current from 1mA to 100mA and verify that output voltage is 5V with respect to GND.

Note: While  performing  an  output  short-circuit  test,  it  is possible for the ceramic output capacitor to oscillate with the  wiring  inductance  between  the  capacitor  and  shortcircuited load, and thereby cause the absolute maximum rating of VOUT pin (-0.3V) to be exceeded. The resistor (R7) and the capacitor (C5) are included on this EV kit to protect against unintentional violation of the above mentioned rating. In the actual system design, parasitic board or wiring inductance should be minimized and the outputvoltage waveform under short-circuit operation should be verified  to  ensure  that  the  absolute  maximum  rating  of VOUT pin is not exceeded.

<!-- image -->

## MAX17552 5V Output Evaluation Kit (µMAX)

## Detailed Description

The MAX17552 5V EV kit (µMAX) is a fully assembled and tested  circuit  board  that  demonstrates  the  performance of  the  MAX17552 60V, 100mA ultra-small, high-efficiency, synchronous  step-down  DC-DC  converter  in  a  10-pin µMAX  package.  The  EV  kit  operates  over  a  wide  input voltage  range  of  6V  to  60V  and  provides  up  to  100mA load  current  at  5V  output.  It  draws  only  26µA  supply current under no-load conditions (EN/UVLO connected to VIN ). The EV  kit is programmed  to switch  at  a  frequency  of  220kHz  and  delivers  a  peak efficiency  of  93%  with  the  supplied  components.  The device is simple to use and easily configurable with minimal external components.  It  features cycle-by-cycle  peak current-limit  protection,  undervoltage  lockout  and  thermal shutdown.

The EV kit includes an EN/UVLO PCB pad and jumpers JU1 and JU2 to enable control of the converter output. The  MODE PCB pad and jumper JU3 are provided for selecting the mode of operation of the converter. RESET PCB pad is available for monitoring the RESET output. The RT/SYNC PCB pad can be used to synchronize the EV kit switching frequency to an external clock frequency.

## Enable Control (JU1, JU2)

The EN/UVLO pin on the EV kit serves as an on/off control while also allowing the user to program the input undervoltage lockout (UVLO) threshold. Jumpers JU1 and JU2 configure  the  EV  kit's  output  for  turn-on/turn-off  control. See Table 1 for proper JU1, JU2 jumper configurations.

Additionally, resistors R1 and R2 are included to set the UVLO to a desired turn-on voltage. Refer to the Setting the  Input  Undervoltage-Lockout  Level section  in the

## Table 1. Enable Control (EN/UVLO) (JU1, JU2)

| SHUNT POSITION   | SHUNT POSITION   |                                                 |                     |
|------------------|------------------|-------------------------------------------------|---------------------|
| JU1              | JU2              | EN/UVLO PIN                                     | VOUT OUTPUT         |
| 1-2              | Open             | Connected to VIN                                | Enabled             |
| Open             | 1-2              | Connected to GND                                | Disabled            |
| 1-2*             | 1-2              | Connected to midpoint of R1/R2 resistor-divider | Enabled at VIN ≥ 6V |

## Table 2. MODE Control (JU3)

| SHUNT POSITION   | MODE PIN         | MODE OF OPERATION   |
|------------------|------------------|---------------------|
| 1-2              | Connected to GND | Forced PWM          |
| Open*            | Unconnected      | PFM                 |

* Default position.

## Evaluates: MAX17552 (µMAX) in 5V Output-Voltage Application

MAX17552  IC  data  sheet  for  additional  information  on setting the UVLO threshold voltage.

## RESET Output

The EV kit provides a PCB pad to monitor the status of the RESET output. RESET goes high when output voltage rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when output voltage falls below 92% (typ) of its nominal regulated voltage.

## PFM or Forced-PWM Mode (MODE)

The EV kit includes a jumper (JU3) to select the mode of operation of the converter. Install a shunt across JU3 before powering up the EV kit to enable the forced-PWM operation. Keep JU3 open to enable the light-load PFM operation. See Table 2 for proper JU3 settings.

## Soft-Start

The EV kit offers a fixed 5ms soft-start time. Connect the capacitor  C4  to  adjust  the  soft-start  time  (t SS ).  Use  the following equation to determine the soft-start capacitance value (C SS ):

<!-- formula-not-decoded -->

where t SS  is in milliseconds and C SS  is in nanofarads.

## External Synchronization (RT/SYNC)

The EV kit provides a PCB pad to synchronize the EV kit  switching  frequency  to  an  external  clock  frequency. Apply  the  external  clock  to  the  RT/SYNC  PCB  pad though an AC-coupling capacitor. Refer to the External Synchronization section in the MAX17552 IC data sheet for  additional  information  on  configuring  the  external clock and selecting the AC-coupling capacitor.

│

## MAX17552 5V Output Evaluation Kit (µMAX)

## EV Kit Performance Report

<!-- image -->

│

## Evaluates: MAX17552 (µMAX) in 5V Output-Voltage Application

## MAX17552 5V Output Evaluation Kit (µMAX)

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1            |     1 | 22µF, 100V electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEVFK2A220P |
| C2            |     1 | 1µF ±10%, 100V X7R ceramic capacitor (1206) Murata GRM31CR72A105K       |
| C3            |     1 | 10µF ±10%, 6.3V X7R ceramic capacitor (1206) Murata GRM31CR70J106K      |
| C4            |     0 | Not installed, ceramic capacitor                                        |
| C5            |     1 | 0.22µF ±10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C224K     |
| JU1-JU3       |     3 | 2-pin headers                                                           |
| L1            |     1 | 220µH, 235mA inductor Coilcraft, Inc. LPS5030-224ML                     |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| Coilcraft, Inc. | 847-639-6400 | www.coilcraft.com      |
| Murata Americas | 770-436-1300 | www.murataamericas.com |
| Panasonic Corp. | 800-344-2112 | www.panasonic.com      |

Note:

Indicate that you are using the MAX17552AUB when contacting these component suppliers.

Evaluates: MAX17552 (µMAX) in 5V

Output-Voltage Application

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| R1            |     1 | 3.01MΩ ±1% resistor (0402)                                                                                                                      |
| R2            |     1 | 787kΩ ±1% resistor (0402)                                                                                                                       |
| R3            |     1 | 191kΩ ±1% resistor (0402)                                                                                                                       |
| R4            |     1 | 261kΩ ±1% resistor (0402)                                                                                                                       |
| R5            |     1 | 49.9kΩ ±1% resistor (0402)                                                                                                                      |
| R6            |     1 | 100kΩ ±1% resistor (0402)                                                                                                                       |
| R7            |     1 | 22.1Ω ±1% resistor (0402)                                                                                                                       |
| U1            |     1 | 60V, 100mA, ultra-small, high- efficiency, synchronous step-down DC-DC converter with 22µA no- load supply current (10 µMAX) Maxim MAX17552AUB+ |
| -             |     3 | Shunts                                                                                                                                          |
| -             |     1 | PCB: MAX17552AUB-5V EVALUATION KIT                                                                                                              |

│

## Evaluates: MAX17552 (µMAX) in 5V Output-Voltage Application

Figure 1. MAX17552 5V EV Kit (µMAX) Schematic

<!-- image -->

## MAX17552 5V Output Evaluation Kit (µMAX)

Figure 2. MAX17552 5V EV Kit (µMAX) Component Placement Guide-Component Side

<!-- image -->

## Evaluates: MAX17552 (µMAX) in 5V Output-Voltage Application

Figure 3. MAX17552 5V EV Kit (µMAX) PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX17552 5V EV Kit (µMAX) PCB Layout-Solder Side

<!-- image -->

## MAX17552 5V Output Evaluation Kit (µMAX)

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17552AUBEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17552 (µMAX) in 5V Output-Voltage Application

## MAX17552 5V Output Evaluation Kit (µMAX)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 1/14            | Initial release                    | -               |
|                 1 | 4/14            | Updated Ordering Information table | 7               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP InteJrated reserYes the riJht to chanJe the circuitry and specifications without notice at any tiPe.

│

Evaluates: MAX17552 (µMAX) in 5V

Output-Voltage Application