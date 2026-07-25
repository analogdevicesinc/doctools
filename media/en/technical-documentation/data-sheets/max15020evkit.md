<!-- lastmod 2022-08-02 -->
## MAX15020 Evaluation Kit

## General Description

The MAX15020 evaluation kit (EV kit) is a fully assembled and tested PCB that evaluates the MAX15020 PWM stepdown  regulator  IC  with  an  integrated  high-side  switch. The MAX15020 is equipped with a reference input for the feedback error amplifier, allowing dynamic output-voltage programming. The MAX15020 EV kit operates over a wide input-voltage range of 7.5V to 40V and provides up to 2A.

The  MAX15020  internal  switching  frequency  can  be set  to  either  300kHz  or  500kHz.  The  MAX15020  EV  kit features  a  SYNC  input  to  provide  external  frequency synchronization for sensitive applications. The EV kit uses a  MAX15020  step-down  regulator  in  a  20-pin  thin  QFN package. The MAX15020 IC operates over the automotive temperature range of -40°C to +125°C and is suitable for printers and industrial applications.

## Features

- Wide 7.5V to 40V Input Range
- Dynamic Output-Voltage Control from 0.8V to 36V with 2A Load
- Selectable 300kHz/500kHz Switching Frequency
- Turn-On/Off Control
- Demonstrates MAX15020 IC Low Shutdown Current
- High Efficiency Up to 96% (V IN = 36V, V OUT = 30V, I LOAD = 2A)
- Demonstrates MAX15020 IC Overcurrent and Thermal Protection
- Space-Saving 5mm x 5mm, 20-pin TQFN Package
- Fully Assembled and Tested

Evaluates: MAX15020

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 7.5V to 40V adjustable, 3A power supply
- 15Ω resistive load rated for 75W or greater
- Two digital voltmeters

## Procedure

The  MAX15020  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify  that  a  shunt  is  not  installed  at  jumper  JU1 (default 32V turn-on voltage).
- 2)  Verify that shunts are installed on pins 1-2 of jumpers JU2 (REFIN = REFOUT) and JU3 (300kHz switching frequency).
- 3)  Connect the resistive load between the OUT PCB pad and the PGND PCB pad.
- 4)  Connect  digital  voltmeters  across  the  IN  and  PGND pads, and the OUT and PGND pads on the EV kit board.
- 5)  Connect the power supply's positive terminal to the IN PCB pad on the EV kit, and connect the power-supply ground terminal to the PGND PCB pad.
- 6)  Turn on the power supply.
- 7)  Set the power-supply voltage to 36V.
- 8)  Verify that the voltmeter at OUT measures 30V.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15020EVKIT+ | EV Kit |

<!-- image -->

## MAX15020 Evaluation Kit

## Detailed Description of Hardware

The  MAX15020  EV  kit  circuit  uses  a  MAX15020  stepdown regulator IC (U1) to implement a step-down DC-DC regulator  circuit.  The  EV  kit  operates  over  a  7.5V  to 40V  input  range.  The  circuit  provides  a  dynamically programmable  output  range  of  0.8V  to  36V  and  can deliver  up  to  2A  of  current  with  excellent  line  and  load regulation. The MAX15020 step-down regulator features an internal high-side-low R DS(ON)  MOSFET to achieve higher efficiency and lower overall system cost. The MAX15020 also  features  configurable  soft-start,  shutdown  control, cycle-by-cycle  current  limit,  hiccup-mode  output  shortcircuit protection, and thermal shutdown. The undervoltage lockout (UVLO) threshold is configurable by choosing the appropriate R1 and R2 resistors.

The  MAX15020  EV  kit  features  a  selectable  300kHz or  500kHz  switching-frequency  operation,  in  addition to  a  SYNC  input  that  can  be  used  to  synchronize  the MAX15020  to  frequencies  operating  in  the  300kHz  to 500kHz range. An external reference input (REFIN\_EXT) is available to dynamically change the output voltage.

## Jumper Selection ON/ OFF Mode

The  MAX15020  EV  kit  features  a  ON/ OFF mode  that reduces  the  MAX15020  supply  current  to  6μA  (typ). The  3-pin  jumper  JU1  selects  the  ON/ OFF mode  for the  MAX15020  EV  kit.  See  Table  1  for  jumper  JU1 configurations

## REFIN\_EXT Input

The MAX15020 features a reference input for the internal error  amplifier.  The  voltage  applied  to  REFIN\_EXT  PCB pad is used to dynamically change the circuit's output voltage. Jumper JU2 connects REFIN to REFOUT to use the MAX15020's 1V internal reference voltage. See Table 2 for jumper JU2 configurations. To change the MAX15020 EV kit  output  voltage  using  REFIN\_EXT,  refer  to  the Setting the Output Voltage section in the MAX15020 IC data sheet.

## Table 1. Jumper JU1 ON/ OFF Mode

| SHUNT LOCATION   | ON/ OFF PIN                                  | MAX15020 OUTPUT                |
|------------------|----------------------------------------------|--------------------------------|
| 1-2              | Connects to V IN directly                    | MAX15020 enabled               |
| 2-3              | Connects to GND                              | MAX15020 disabled              |
| None*            | Connects to V IN through R1 and R2 resistors | MAX15020 enabled at V IN @ 32V |

* Default position.

Evaluates: MAX15020

Table 2. Jumper JU2 Reference-Voltage Input

| SHUNT LOCATION   | REFIN PIN                                  | V OUT                             |
|------------------|--------------------------------------------|-----------------------------------|
| 1-2*             | Connects directly to REFOUT                | 30V                               |
| 2-3              | Externally controlled by REFIN_EXT voltage | Dependent on voltage at REFIN_EXT |

* Default position.

## Frequency Selection

Jumper  JU3  selects  the  MAX15020  operating  switching frequency  between  300kHz  or  500kHz.  See  Table  3  for switching frequency selection.

## Configuring the Output Voltage (OUT)

The  MAX15020  EV  kit  step-down  regulator  output voltage  is  configured  to  30V  by  resistors  R7  and  R8, and with REFIN = REFOUT. The EV kit's output voltage (OUT) can be reconfigured in the range of 0.8V to 36V by replacing resistors R7 and R8. To select a new value for resistor R8, refer to the Compensation Design section in the MAX15020 IC data sheet. Use the following equation to reconfigure the output voltage to the desired value:

<!-- formula-not-decoded -->

where V OUT is the desired output voltage in volts, V REFIN is the voltage supplied by REFOUT or REFIN\_EXT, and R7 is typically 10kΩ.

The  MAX15020  output  voltage  can  also  be  adjusted dynamically by driving REFIN\_EXT between 0 and 3.6V. To use the REFIN\_EXT input, place a shunt across pins 2-3 of jumper JU2.

## Table 3. Jumper JU3 Frequency Selection

| SHUNT LOCATION   | FSEL PIN         | MAX15020 SWITCHING FREQUENCY   |
|------------------|------------------|--------------------------------|
| 1-2*             | Connects to VREG | 300kHz                         |
| 2-3              | Connects to GND  | 500kHz                         |

* Default position. When operating the MAX15020 with an external clock signal at SYNC, place the shunt on pins 1-2. Refer to the Oscillator/Sychronization Input section of the MAX15020 IC data sheet for more information.

│

## MAX15020 Evaluation Kit

Reconfiguring  the  MAX15020  EV  kit  for  a  new  output voltage may require replacing inductor L1 and capacitors C1 and/or C6. To select a new value for inductor L1 and capacitors  C1  and  C6,  refer  to  the Inductor  Selection , Output Capacitor Selection , and Input Capacitor Selection sections, respectively, in the MAX15020 IC data sheet.

## Configuring the ON/ OFF Threshold

The  MAX15020  EV  kit  turn-on  threshold  is  configured  to 32V  with  resistors  R1  and  R2.  The  MAX15020  turns  on when the input voltage (V IN ) is approximately above 32V and  ON/ OFF is  ≥  1.23V.  The  ON/ OFF threshold  can  be reconfigured to  a  desired  value  by  appropriately  selecting resistors  R1  and  R2.  Refer  to  the Setting  the  ON/ OFF Threshold section  in  the  MAX15020  IC  data  sheet.  To reconfigure the UVLO threshold, use the following equation:

<!-- formula-not-decoded -->

where resistor  R1  should  be  in  the  range  of  100kΩ  and VUVLO is the desired UVLO threshold in volts.

Place a shunt across pins 1-2 of jumper JU1 for always-on operation, which bypasses the on/off threshold. Resistor R11 is utilized to prevent excessive power dissipation in resistor R2 when the shunt at jumper JU1 is installed on pins 1-2.

## Synchronization Input (SYNC)

The  MAX15020  EV  kit  circuit  features  a  selectable 300kHz or 500kHz switching frequency. Jumper JU3 sets the internal switching frequency. The EV kit's SYNC PCB pad can be used to synchronize the MAX15020 with an external digital clock in the range of 300kHz to 500kHz. When SYNC is driven with an external digital clock, the MAX15020 synchronizes to the rising edge of the external clock.

The  digital  square-wave  clock  source  must  provide  the following signal qualities:

- Output  voltage:  Logic-low  =  0  to  0.8V,  logic-high  = 2V to 5.5V
- Input  frequency  =  300kHz  to  500kHz  (refer  to  the MAX15020 IC data sheet for more information on the SYNC input)
- Minimum pulse width = 200ns

To  use  external  synchronization,  connect  the  external square-wave clock to the SYNC and GND pads.

│

## MAX15020 Evaluation Kit

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                     |
|----------------|-------|---------------------------------------------------------------------------------|
| C1, C6         |     2 | 560µF ±20%, 50V low ESR electrolytic capacitors (12.5mm x 25mm) SANYO 50ME560WX |
| C2, C4, C10    |     3 | 1µF ±10%, 25V X7R ceramic capacitors (0805) TDK C2012X7R1E105K                  |
| C3, C5, C7, C9 |     4 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K                |
| C8             |     1 | 0.22µF ±10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H224K             |
| C11            |     1 | 0.027µF ±10%, 50V X7R ceramic capacitor (0603) AVX 06035C273KAT2A               |
| C12            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0805) TDK C2012X7R1H104K                 |
| C13            |     1 | 330pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H331J                  |
| D1             |     1 | 60V, 3A Schottky diode (SMA) Diodes Inc. B360A                                  |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| AVX Corp.       | 843-448-9411 | www.avxcorp.com        |
| Diodes Inc.     | 805-446-4800 | www.diodes.com         |
| Murata Americas | 770-436-1300 | www.murataamericas.com |
| SANYO           | 619-661-6835 | www.sanyodevice.com    |
| Sumida Corp.    | 847-545-6700 | www.sumida.com         |
| TDK Corp.       | 847-803-6100 | www.component.tdk.com  |
| Vishay          | 203-268-6261 | www.vishay.com         |

Note: Indicate that you are using the MAX15020 when contact-

ing these component suppliers.

Evaluates: MAX15020

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| D2            |     1 | 100V, 150mA Schottky diode (SOD-123) Vishay BAT46W                       |
| JU1-JU3       |     3 | 3-pin headers                                                            |
| L1            |     1 | 22µH, 4.7A inductor Sumida CDRH127/LDNP-220MC                            |
| R1            |     1 | 97.6kΩ ±1% resistor (0603)                                               |
| R2            |     1 | 4.02kΩ ±1% resistor (0603)                                               |
| R3, R4        |     2 | 10kΩ ±5% resistors (0603)                                                |
| R5            |     1 | 10Ω ±5% resistor (0603)                                                  |
| R6, R7        |     2 | 10kΩ ±1% resistors (0603)                                                |
| R8            |     1 | 340Ω ±1% resistor (0603)                                                 |
| R9            |     1 | 15.8kΩ ±1% resistor (0603)                                               |
| R10           |     1 | 0Ω ±5% resistor (0603)                                                   |
| R11           |     1 | 20kΩ ±1% resistor (0603)                                                 |
| TP1-TP4       |     4 | PC mini red test points                                                  |
| U1            |     1 | PWM step-down regulator (20 TQFN) (5mm x 5mm x 0.8mm) Maxim MAX15020ATP+ |
| -             |     3 | Shunts (JU1-JU3)                                                         |
| -             |     1 | PCB: MAX15020 E VALUATION KIT+                                           |

│

Evaluates: MAX15020

Figure 1. MAX15020 EV Kit Schematic

<!-- image -->

Figure 2. MAX15020 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX15020 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX15020 EV Kit PCB Layout-GND Layer 2

<!-- image -->

## MAX15020 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | REVISION DESCRIPTION                                                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/07            | Initial release                                                                                                                                              | -               |
|                 1 | 11/07           | Updated Ordering Information table format; corrections to Procedures (step 2) , Configuring ON/ OFF Threshold , and Figure 1.                                | 1-4             |
|                 2 | 6/08            | Changed part number for C13 in Component List .                                                                                                              | 1               |
|                 3 | 5/15            | Deleted automotive reference in General Description section; moved Quick Start section to page 1 and Component List and Component Suppliers tables to page 4 | 1, 4            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX15020