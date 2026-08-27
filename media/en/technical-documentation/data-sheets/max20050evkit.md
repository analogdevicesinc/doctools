<!-- lastmod 2022-08-03 -->
## MAX20050 Evaluation Kit

## General Description

The MAX20050 evaluation kit (EV kit) demonstrates the MAX20050 and MAX20052, 1.5A synchronous buck LED drivers with integrated MOSFETs.

The  EV  kit  operates  from  a  DC  supply  voltage  from 4.5V  to  65V  and  the  switching  frequency  is  fixed  at 400kHz.  Spread-spectrum  mode  (SSM)  is  enabled  for EMI improvement. The EV kit demonstrates both analog and pulse-width modulation (PWM) dimming. The EV kit also  demonstrates short  LED,  open  LED,  and  overtemperature fault protection.

The EV kit comes with a MAX20052ACTV IC, which can be installed to evaluate the 2.1MHz switching frequency device.  See  the Evaluating  the  MAX20052 section  for more information.

## MAX20050 EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX20050/MAX20052

## Features and Benefits

- 4.5V to 65V Input Voltage
- Drives 1 to 16 LEDs
- 0A to 1.5A LED Current
- Demonstrates Undervoltage-Lockout and Output Short Protection
- Demonstrates Current-Limit and Thermal-Shutdown Feature
- Demonstrates 5V, 10mA LDO Output Capability
- Proven PCB Layout and Thermal Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX20050 EV kit
- 5V to 65V, 4A DC power supply
- Two digital voltmeters (DVMs)
- One series-connected HB LED string rated to no less than 2A
- Current probe to measure the HB LED current
- Small flat-blade screwdriver to turn the potentiometer wiper adjustment pin

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect the HB LED string anode to the LED+ PCB pad and the cathode to the PGND PCB pad.
- 2) Connect the first DVM across the LED+ and PGND PCB pads.
- 3) Connect the second DVM across the REFI test point and the AGND test point.
- 4) Connect the power supply to the VIN PCB pad and the power-supply ground to the PGND PCB pad.
- 5) Clip the current probe across the wire connecting the HB LED string to the EV kit
- 6) Turn on the power supply and set it to a voltage greater than the maximum HB LED string voltage, but less than the 65V maximum input voltage.
- 7) Use the screwdriver to turn the potentiometer until the second DVM reads 1.14V.
- 8) Measure the HB LED current using the current probe and verify that the current is 1.5A.
- 9) Verify that the first DVM shows the expected LED string voltage.
- 10)  Use the screwdriver to turn the potentiometer until the second DVM reads 0.67V.
- 11)  Measure the HB LED current using the current probe and verify that the current is 0.75A.

## Detailed Description of Hardware

The MAX20050 EV kit demonstrates the MAX20050 1.5A synchronous buck LED driver with integrated MOSFETs. The  device  consists  of  a  fully  synchronous  step-down converter  with  integrated  MOSFETs.  The  device  is capable of driving a series string of LEDs at up to 1.5A, with  a  minimum  number  of  external  components.  The device  is  a  fixed-frequency  average  current-mode  stepdown  LED  driver.  The  device  uses  high-side  current regulation, meaning a current-sense resistor is placed on the high side of the LED string, and the voltage across the current-sense resistor is sensed and used to regulate the LED current. The device offers both analog and PWM dimming.  The  device  features  internal  error  amplifier compensation.  Refer  to  the  MAX20050-MAX20053  IC data  sheet  for  recommended  inductor  values  to  ensure stable operation.

## Analog Dimming

The  EV  kit  demonstrates  the  analog  dimming  feature  of the  device.  R6  and  R7  form  a  resistor-divider  between VCC and AGND. R6 is a 10kΩ resistor and R7 is a 10kΩ potentiometer,  with  the  wiper  shorted  to  the  high  side  of the potentiometer. Using a flat-blade screwdriver, turn the wiper adjustment pin clockwise to increase the voltage on the  REFI  input.  Turn  the  wiper  adjustment  pin  counterclockwise  to  decrease  the  voltage  on  the  REFI  input. The REFI input allows for analog dimming of the HB LED string. A  REFI  input  voltage  of  0.2V  or  less  turns  off  the LED driver. A REFI input voltage between 0.2V and 1.2V provides linear dimming of the HB LED string. A REFI input voltage greater than 1.2V sets the HB LED string current to maximum current (based on the current-sense resistor).

Alternatively,  the  analog  dimming  input  can  be  set  with a  power  supply.  Remove  R12  and  connect  the  power supply directly  to  the  REFI  test  point  to  perform  analog dimming  with  a  power  supply.  Be  careful  not  to  violate the  absolute  maximum  voltage  rating  of  V CC   +  0.3V (refer  to  the Absolute  Maximum  Ratings section  in  the MAX20050-MAX20053 IC data sheet).

## MAX20050 Evaluation Kit

## PWM Dimming

The  EV  kit  demonstrates  the  PWM  dimming  feature  of the device. Connect a PWM signal to the PWM test point. Vary the duty cycle to increase or decrease the intensity of the HB LED string. The PWM input of the device has 2V (max) rising threshold and a 0.8V (min) falling threshold so it  is  compatible with 3.3V and 5V logic level signals. The PWM input is pulled up to V CC  through an external 10kΩ resistor on the EV kit.

## Fault Indicator

The EV kit demonstrates the fault-protection features of the  device.  The  device  offers  shorted-LED,  open-LED, and  overtemperature  protection.  The FLT output  is  an open-drain,  active-low  fault  indicator.  Refer  to  the Fault Pin  Behavior section  in  the  MAX20050-MAX20053  IC data sheet for more information.

## Acoustic Noise

High  input  voltage  combined  with  PWM  dimming  can cause acoustic noise in certain applications. The acoustic noise comes from the electrostrictive effect of ferroelectric ceramics. If this is a concern, consider using low-acoustic-noise  capacitors  on  the  output,  such  as  the  Murata GJ8  series  capacitors,  or  Rubycon  polymer  multi-layer (PML) capacitors.

## Evaluating the MAX20052

The EV kit is capable of evaluating the MAX20052 with some minor modifications. The MAX20052 has a switching  frequency  of  2.1MHz.  To  accommodate  the  higher switching  frequency,  L2  should  be  decreased  to  10µH. The MAX20052 is only suitable for applications where the maximum input voltage is less than 40V.

## Evaluating the MAX20051 and MAX20053

The  MAX20051  and  MAX20053  offer  external  error amplifier compensation and a 2A current limit in a 14-pin TSSOP-EP package. To evaluate these devices, use the MAX20051 EV kit.

## MAX20050 Evaluation Kit

## Component List

* EP = Exposed pad.

| PART               |   QTY | DESCRIPTION                                          |
|--------------------|-------|------------------------------------------------------|
| C1, C2, C4, C6, C7 |     5 | 2.2µF ±10%, 100V X7R ceramic capacitors (1210)       |
| C3                 |     1 | 22µF, 100V electrolytic capacitor (Size F)           |
| C5, C10            |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603)        |
| C9                 |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0603)           |
| C11                |     1 | 0.47µF ±10%, 100V X7R ceramic capacitor (0805)       |
| C18                |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0603)          |
| C19                |     0 | Not installed, ceramic capacitor                     |
| D2                 |     1 | 80V, 1A Schottky diode (SMA) Diodes, Inc. B180A-13-F |
| D3                 |     0 | Not installed, Schottky diode                        |
| FB1                |     1 | Inductor-PCB short                                   |

## Component Suppliers

| SUPPLIER            | PHONE        | WEBSITE                |
|---------------------|--------------|------------------------|
| Bourns Inc.         | 951-781-5500 | www.bourns.com         |
| Coilcraft, Inc.     | 847-639-6400 | www.coilcraft.com      |
| Diodes Incorporated | 805-446-4800 | www.diodes.com         |
| Murata Americas     | 770-436-1300 | www.murataamericas.com |

Note:

Indicate that you are using the MAX20050 when contacting these component suppliers.

Evaluates: MAX20050/MAX20052

| PART             |   QTY | DESCRIPTION                                        |
|------------------|-------|----------------------------------------------------|
| L1               |     1 | 4.7µH ±20%, 6.2A inductor Coilcraft MSS1278T-472ML |
| L2               |     1 | 47µH ±20%, 2.9A inductor Coilcraft MSS1278T-473ML  |
| R1, R2           |     2 | 0.25Ω ±1% resistors (1206)                         |
| R3, R4           |     2 | 10Ω ±1% resistors (0603)                           |
| R6, R9, R13, R14 |     3 | 10kΩ ±1% resistors (0603)                          |
| R7               |     1 | 10kΩ ±10% potentiometer Bourns Inc. 3296W-1-103LF  |
| R12              |     1 | 0Ω ±5% resistor (0603)                             |
| U1               |     1 | LED driver (12 TDFN-EP*) MAX20050ATC/V+            |
| -                |     1 | LED driver (12 TDFN-EP*) MAX20052ATC/V+            |
| -                |     1 | PCB: MAX20050 EVKIT                                |

│

Figure 1. MAX20050 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX20050 EV kit Component Placement GuideComponent Side

Figure 3. MAX20050 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX20050 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20050EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX20050/MAX20052

## MAX20050 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,nteJrated reserves the riJht to chanJe the circuitry and specifications without notice at any time.

│

Evaluates: MAX20050/MAX20052