<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX15041 Evaluation Kit

## General Description

Features

The MAX15041 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX15041 synchronous buck converter IC with integrated high-side and low-side switches. The EV kit output is configured to 3.3V and delivers up to 3A output current. The EV kit circuit operates at the MAX15041 internally set 350kHz switching frequency and features PCB pads to monitor the IC power-good output signal (PGOOD) and to enable the circuit.

The  MAX15041  EV  kit  requires  a  4.5V  to  28V  power supply that provides up to 3A for normal operation.

- S 4.5V to 28V Input-Voltage Range
- S 3.3V at 3A Output
- S Fixed 350kHz Switching Frequency
- S Evaluates Internal 170m I RDS-ON High-Side and 105m I RDS-ON Low-Side Power Switches
- S High Efficiency Up to 93%
- S Enable Input (EN)
- S Power-Good Output (PGOOD)
- S Overcurrent and Thermal-Shutdown Protection
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15041EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1            |     1 | 47 F F Q 20%, 35V electrolytic ceram- ic capacitor (6.3mm x 5.8mm) Panasonic EEEFK1V470P |
| C2            |     1 | 1 F F Q 10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C105K                      |
| C3            |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K                    |
| C4, C7        |     2 | 0.01 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K                  |
| C5            |     1 | 22 F F Q 10%, 6.3V X5R ceramic capacitor (1206) Murata GRM31CR60J226K                    |
| C6            |     0 | Not installed, ceramic capacitor (1206)                                                  |
| C8            |     1 | 100pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885CIH101J                       |
| C9            |     1 | 12000pF Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C123K                    |

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| C10           |     0 | Not installed, ceramic capacitor (0603)                                         |
| D1            |     1 | 150mA, 75V diode (SOD323) Diodes, Inc. 1N4148WS-7-F (Top Mark: T4 or T6)        |
| JU1           |     1 | 3-pin header                                                                    |
| L1            |     1 | 4.7 F H, 6.4A inductor Sumida CDRH105RNP-4R7N                                   |
| R1, R2, R6    |     3 | 10k I Q 1% resistors (0603)                                                     |
| R3            |     1 | 1.8k I Q 1% resistor (0603)                                                     |
| R5            |     1 | 45.3k I Q 1% resistor (0603)                                                    |
| R7            |     0 | Not installed, resistor (0603)                                                  |
| R8            |     1 | 47 I Q 5% resistor (0603)                                                       |
| U1            |     1 | Internal switch buck converter (16 TQFN-EP*) Maxim MAX15041ETE+ (Top Mark: AGV) |
| -             |     1 | Shunt (JU1)                                                                     |
| -             |     1 | PCB: MAX15041 EVALUATION KIT+                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX15041 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes, Inc.                           | 805-446-4800 | www.diodes.com              |
| Murata North America Electronics, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |

Note: Indicate that you are using the MAX15041 when contacting these component suppliers.

## Quick Start

## Required Equipment

- 28V	adjustable,	3A	power	supply
- Electronic load capable of sinking up to	 3A (e.g., HP 6060B)
- Two	digital	voltmeters	(DVMs)

## Detailed Description of Hardware

The  MAX15041  EV  kit  circuit  uses  a  MAX15041  stepdown  converter  IC  to  implement  a  step-down  DC-DC converter  circuit.  The  MAX15041  IC  is  available  in  a 16-pin  TQFN  surface-mount  package  and  features  a fixed  350kHz  switching  frequency  and  internal  low RDS-ON MOSFETs to achieve high efficiency and lower overall system cost. The MAX15041 EV kit operates over a wide input-voltage range of 4.5V to 28V.

The MAX15041 EV kit is configured to 3.3V using resistors R5 and R6 and delivers up to 3A of output current. The EV kit circuit soft-start startup time is set to 1.2ms using capacitor C7. The EV kit also provides a PGOOD PCB  pad  to  monitor  the  IC  power-good  output  signal and an EN PCB pad to enable/disable the EV kit VOUT output.

## Input Power Source

The  MAX15041  EV  kit  VOUT  output  is  optimized  to provide up to 3A when operating with an input-voltage source of 4.5V to 28V applied at the VIN and PGND pads. Refer to the TOC 19, 20, and 21 curves in the Typical Operating  Characterisitc section  in  the  MAX15041  IC data  sheet  for  current  deration  for  different  EV  kit  VIN inputs and VOUT outputs .

## Configuring the Output Voltage (VOUT)

The MAX15041 EV kit step-down converter output voltage is configured to 3.3V by resistors R5 and R6. The EV kit's  output  voltage  (VOUT)  can  be  reconfigured  in  the 0.606V to 0.9 x VIN range by replacing resistors R5 and R6. Use the following equation to reconfigure the output voltage to the desired value:

<!-- formula-not-decoded -->

where VOUT is  the  desired  output  voltage,  R6  is  10k I (typ), and R5 is in kilohms.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Procedure

The  MAX15041  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper	JU1.	(EV	kit	enabled)
- 2) Connect  the  power-supply  positive  and  ground terminals to the VIN and PGND PCB pads, respectively.
- 3) Connect  the  positive  and  negative  terminal  of  the electronic load to the VOUT and PGND PCB pads, respectively.
- 4) Connect a DVM across the VOUT and PGND PCB pads.
- 5) Connect a DVM across the PGOOD and SGND PCB pads.
- 6) Turn on the power supply.
- 7) Set the power-supply voltage to 12V.
- 8) Enable the 3A electronic load.
- 9) Verify that the voltmeter connected to  VOUT measures 3.3V.
- 10)  Verify that the voltmeter connected to PGOOD measures approximately 5V.

## MAX15041 Evaluation Kit

Reconfiguring  the  MAX15041  EV  kit  for  a  new  output voltage  may  require  replacing  inductor  L1,  capacitors C1 and/or C5, and compensation components C8, C9, and R3. The minimum output voltage is also impacted by  minimum controllable  on  time  of  the  MAX15041  IC. To select a new value for inductor L1, and capacitors C1 and C5, refer to the Inductor Selection , Input Capacitor Selection , and Output-Capacitor  Selection sections, respectively, in the MAX15041 IC data sheet.

## Enable Control (JU1)

Jumper JU1 configures the MAX15041 EV kit output for turn-on/turn-off control. Install a shunt across pins 1-2 to enable VOUT or across pins 2-3 to disable VOUT. VOUT can  also  be  enabled  by  applying  an  external  signal greater than 1.95V (typ) at the EN and SGND PCB pads. See Table 1 for proper JU1 configuration.

## Table 1. Enable Control (JU1)

| SHUNT POSITION   | EN PIN                      | EV KIT FUNCTION                                |
|------------------|-----------------------------|------------------------------------------------|
| 1-2              | Connected to VIN through R1 | VOUT enabled                                   |
| 2-3              | Connected to GND            | VOUT disabled                                  |
| Not installed    | Externally con- trolled     | Voltage source applied at EN and SGND PCB pads |

<!-- image -->

## Power-Good Output (PGOOD)

The  MAX15041  EV  kit  provides  a  PCB  pad  to  monitor the status of the power-good output (PGOOD). PGOOD can be used as a system reset signal during power-up. PGOOD is high after VOUT rises above 92.5% of its programmed output voltage. PGOOD is pulled up to VDD (5V, typ) using resistor R2. PGOOD is pulled low when VOUT drops below 90% of its nominal set voltage.

## Soft-Start Timing Input (SS)

The  MAX15041  EV  kit  circuit  soft-start  time  is  set  to 1.2ms using capacitor C7. To reconfigure the EV kit for other  soft-start  times,  refer  to  the Setting  the  Soft-Start Time section in the MAX15041 IC data sheet.

## Compensation Network

The  MAX15041  IC  provides  the  flexibility  of  externally compensating  its  internal  error  amplifier  to  achieve stability  for  various  applications.  The  MAX15041  EV  kit circuit is compensated by appropriately choosing values for resistors R3 and capacitors C8 and C9. To reconfigure the compensation network for specific requirements, refer to the Compensation Design Guidelines section in the MAX15041 IC data sheet.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX15041 Evaluation Kit

Figure 1. MAX15041 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15041 Evaluation Kit

<!-- image -->

Figure 2. MAX15041 EV Kit Component Placement GuideComponent Side

Figure 3. MAX15041 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX15041 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX15041 Evaluation Kit

Figure 5. MAX15041 EV Kit PCB Layout-SGND Layer 3

<!-- image -->

Figure 6. MAX15041 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6