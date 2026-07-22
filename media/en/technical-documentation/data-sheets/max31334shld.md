<!-- lastmod 2022-11-22 -->
<!-- image -->

## MAX31334 Evaluation Kit

## General Description

The  MAX31334  shield  evaluation  kit  (EV  kit)  is  a  fully assembled and tested PCB to evaluate the MAX31334, an ultra-low power, low-cost, real-time clock (RTC) with

integrated power switch, I 2 C interface, and power management.  The  shield  EV  kit  operates  from  a  single supply (either from USB or external power supply) and the onboard crystal provides a 32.768kHz clock signal. This device is accessed through an I 2 C serial interface provided by a MAX32625PICO board connected to a PC by a USB port.

The MAX31334 shield EV kit provides the hardware and software graphic user interface (GUI) necessary to evaluate  the  MAX31334.  The  kit  includes  an  installed MAX31334. It connects to the PC through a MAX32625 PICO board and a micro-USB cable.

## Features

- Easy Evaluation of the MAX31334
- +1.1V to +5.5V Single-Supply Operation
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- Assembled circuit board, including the MAX31334
- Assembled MAX32625PICO I 2 C circuit board
- Micro-USB cable

## MAX31334 EV Kit Files

| FILE              | DESCRIPTION                         |
|-------------------|-------------------------------------|
| MAX31334EVKIT.exe | Installs EV kit files onto computer |

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX31334

## Quick Start

## Required Equipment

- One DC power supply capable of supplying +1.1V to +5.5V (typical +3.0V used in the following instructions)
- One pico ammeter for measuring the current
- One oscilloscope
- One micro-USB cable
- One assembled MAX32625PICO I 2 C circuit board
- One MAX31334 shield EV kit

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Note:  In  the following sections, software-related items are identified by bolding.  Text  in bold refers  to  items  directly  from  the evaluation software. Text in bold and underlined refers to items from the Windows® operating system. Follow these steps to verify board operation.

1. Place the MAX31334 EV kit on a nonconductive surface to ensure  that  nothing  on  the  PCB  gets  shorted  to  the workspace.
2. Set the jumpers to their default positions as shown in Table 1 to test the WLP package variant (U1) of MAX31334.
3.  With the output of the power supply set to +3.0V and disabled,  connect  the  positive  terminal  of  the  DC supply to VCC\_EXT and the negative terminal to the GND of the EV kit.
4.  Connect the MAX32625PICO I 2 C circuit board to the EV kit at its location ( Figure 1 ).
5.  Connect the micro-USB cable between the MAX32625PICO board and PC/laptop.
6.  Enable the +3.0V DC power supply.
7.  Click  on  the  Design  and  Development  tab  on  the product folder page to  download the latest version of the MAX31334 real-time clock EV kit software, then run the control software.
8.  Open the MAX31334 real-time clock EV kit software; this displays the MAX31334 Real-Time Clock EV Kit Software Monitor page and shows 'USB Connected' in the lower right corner.
9.  Verify that the clock has started counting by checking the ' Auto Update ' box under Real Time Monitoring.
10.  Configure the desired date and time in the Date/Time Configuration section  and  click  the SET button  to update it in the Real Time Monitoring section.

## MAX31334 Evaluation Kit

## EV Kit Photo

Figure 1. MAX31334 EV Kit Board Connections

<!-- image -->

<!-- image -->

Evaluates: MAX31334

## MAX31334 Evaluation Kit

Table 1. Jumper Connection Guide

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                               |
|----------|------------------|-----------------------------------------------------------------------------------------------------------|
| JU2      | 1 - 2*           | Connects VBAT pin to TP2.                                                                                 |
| JU2      | 1 - 3            | Connects VBAT pin to GND.                                                                                 |
|          | 1 - 4            | Connects VBAT pin to supercapacitor.                                                                      |
| JU4      | 1 - 2*           | System VCC is powered by VCC_EXT at TP5.                                                                  |
| JU4      | 2 - 3            | System VCC is powered by a +3.3V supply from Arm® Mbed ™ /Arduino®/PICO platform.                         |
| JU6      | 1 - 2            | Connects INTA pin of U1 to ground.                                                                        |
| JU6      | 1 - 3*           | Connects INTA pin of U1 to Mbed/Arduino/PICO platform through a level translator (U5)                     |
| JU6      | 1 - 4            | Connects INTA pin of U1 to test point TP3 with a 10kΩ pullup resistor to system VCC.                      |
| JU7      | 1 - 2*           | . System VCC connects to VCC pin of U1.                                                                   |
| JU7      | OPEN             | Float VCC pin of U1. Connect an ammeter between pin 1 and pin 2 to measure the current consumption of U1. |
| JU8      | 1 - 2            | System VCC powers U2 VCC pin.                                                                             |
| JU8      | OPEN*            | Floats VCC pin of U2. Connect an ammeter between the pins of JU8 to measure the current.                  |
| JU10     | 1 - 2*           | consumption of U2. Connects SDA pin of U1 and U2 to Mbed/Arduino/PICO platform for GUI control.           |
| JU10     | OPEN             | Floats SDA pin for user's own I 2 C control.                                                              |
| JU11     | 1 - 2*           | Connects SCL pin of U1 and U2 to Mbed/Arduino/PICO platform for GUI control.                              |
| JU11     | OPEN             | Floats SCL pin for user's own I 2 C control.                                                              |
| JU13     | 1 - 2*           | Connects power backup selection VBAT at JU2 to VBAT pin of U1.                                            |
|          | OPEN             | Floats VBAT pin of U1 for user's signal input.                                                            |
|          | 1 - 2            | Connects power backup selection VBAT at JU2 to VBAT pin of U2.                                            |
| JU14     | OPEN*            | Floats VBAT pin of U2 for user's signal input.                                                            |
| JU14     | 1-2*             | Connects INTB /CLKOUT pin of U1 to Mbed/Arduino/PICO platform for GUI control.                            |
| JU16     | OPEN             | Floats INTB /CLKOUT pin for user's own control.                                                           |
| JU16     | 1 - 2            | Connect SDA line to U2                                                                                    |
| J5       | 2-3*             | Connect SDA line to U1                                                                                    |
| J8       | 1 - 2            | Connect SCL line to U2                                                                                    |
| J8       | 2-3*             | Connect SCL line to U1                                                                                    |
|          | 1 - 2            | Connect INTA test point to U2                                                                             |
| J9       | 2-3*             | Connect INTA test point to U1                                                                             |
|          |                  | Connect INTB test point to U2                                                                             |
| J10      | 1 - 2 2-3*       | Connect INTB test point to U1                                                                             |

System V CC  is labeled VCC on the PCB.

Evaluates: MAX31334

## MAX31334 Evaluation Kit

## Detailed Description

The  MAX31334  is  an  ultra-low  power,  real-time  clock  (RTC)  time-keeping  device  that  consumes  a  nominal  70nA timekeeping current, extending battery life. It features an integrated high-side power pass switch that enables ultra-lowpower idle modes on duty-cycled applications by disconnecting power to other devices on the system. The MAX31334 supports a wide range of 32.768kHz crystals. Crystals with any capacitive loading (CL) spec can be used, which broadens the pool of usable crystals for this device. This device is accessed through an I 2 C serial interface. The device also features a backup supply (VBAT) and automatically switches over to the backup supply (VBAT) when the main supply (VCC) drops below the programmed threshold voltage and the backup supply (VBAT) voltage.

Other features include two time-of-day alarms, interrupt outputs, a programmable square-wave output, event detection input with timestamping, and a serial bus timeout mechanism. The 32-byte timestamp registers double as RAM storage. The device features a digital Schmitt trigger input (DIN) which can be used to record timestamps and/or generate an interrupt on the falling/rising edge of the DIN signal. The clock/calendar provides seconds, minutes, hours, day, month, year, and date information. A 1/128 second register is available for a sub-second timestamp resolution. The date at the end of the month is automatically adjusted for months with fewer than 31 days, including corrections for leap year. The clock operates in a 24-hour/12-hour format.

## Functional Test Procedure

## Current Draw at Time-Keeping Operation

1. To measure the current drawn under normal Real-Time Clock conditions without any interrupt or clock input/output, do the following:
- a. In the RTC Configuration section, click the Read button.
- b. Disable CLKOUT.
- c. Select 1Hz for Frequency.
2.  For WLP version (U1), remove the jumper from JU7 and connect the pico ammeter between pin 1 and pin 2 of JU7.
3. In the Registers tab under the Register Map section, click the Read button and ensure that the value of register 0x03 (RTC\_Config1) shows 0x01. Otherwise, set it to 0x01 and click the Write button. Now the reading in the picometer is the current from MAX31334 only. It should be around 70nA.

NOTE: All  instruments  need  to  be  disconnected  from  the  I/O  ports  of  the  IC,  since  any  loading  would  add  current consumption.

4.  Remove pico ammeter and replace the jumper on JU7 (for WLP version)

## Setting the Clock

In the Configuration &amp; Time tab in the Date/Time Configuration section, enter the start point of the date and time and then click Set . The clock starts to count from the set point after the Status Log shows 'Write successful'. In the Real Time Monitoring section, verify that the clock is counting from the written start date and time.

## Clock Output Measurement

In the Configuration &amp; Time tab in the RTC Configuration section, enable CLKOUT and select the desired CLKOUT frequency. The clock output can be monitored using an oscilloscope connected to INTB /CLKOUT. A frequency counter can also be used to measure the clock frequency accurately. Refer to the Oscillator Circuit and Clock Accuracy section in the MAX31334 data sheet to correct any clock accuracy error.

## Alarm Interrupt Output

On the Alarms &amp; Timer tab in the Alarm 1 Configuration section, select the Repetition Rate to set the alarm scenario. In the Interrupts subsection of the Interrupts &amp; Flags section, check the Alarm 1 Interrupt box. In the Flags subsection, click the Read button twice to clear the alarm flag bit if it has been previously set. When the RTC reaches the alarm time set in Alarm 1 Configuration , the alarm output at INTB goes from high to low. It changes to high again by clicking the Read button in the Flags subsection. The interrupt status can also be checked by clicking the Read button in the Flags subsection. Repeat the same steps for Alarm 2, but measure the alarm interrupt output at INTA .

Note: Both Alarm 1 and Alarm 2 can be output on INTA when CLKOUT is enabled.

Evaluates: MAX31334

## MAX31334 Evaluation Kit

## Timer Interrupt

Clear all interrupt bits by clicking the Read button in the Flags subsection. Enable the timer and interrupt by checking Timer Enable in the Timer Configuration section and Timer Interrupt in the Interrupts subsection, then select 16Hz on Timer Frequency . Set the Timer Init number to a value, such as 200. When the Timer Count reading reaches 0 from 200, the interrupt output at INTA /CLKIN should go from high to low.

## Power Switch

1. On Power Switch Configuration tab, clear the SLP bit by clicking the Read button in the configuration subsection.
2. Check the power switch status at Real time Monitoring section, the status should be ON.
3. Select the Timer selection at Configuration/Wakeup Enable section.
4. Toggle SLP bit from 0 to 1, check the power switch status in the Real time Monitoring section; the status should be OFF.
5. On the Alarms &amp; Timer tab, enable the timer based on 'Timer Interrupt' setup guide.
6. When the timer count reading reaches 0, the power switch status should be back to ON.

## Power Mode Select

On the Configuration &amp; Time tab in the Power Management section, the trickle charger can be enabled to charge the onboard supercapacitor as a backup battery. The Supply Select drop-down list can be used to select the source of the power supply. VCC means that the IC uses the main supply and VBAT means that the IC uses the supply from the backup battery.  The  backup  battery  source  can  be  either  be  the  onboard  supercapacitor  or  external  backup  supply  that  is connected to the TP2 (VBAT) test point. In Auto, the supply switches between VCC and VBAT automatically based on the PV Fail threshold setting. To verify which supply is utilized, click the READ button in the Flags subsection. Also, the supercapacitor voltage at VBAT (JU2VBAT) can be charged to 'VCC minus diode drop voltage' at a selectable rate in the drop-down list.

## Time Stamping Mode

On the TimeStamp tab  in  the TimeStamp Configuration section,  click  on  the TimeStamp Enable toggle  button  to enable  the  TimeStamp  Mode.  Any  of  the  three  TimeStamp  event  log  conditions  can  be  configured  by  toggling  the respective event enable toggle buttons in the Record TimeStamp on section. The TimeStamps sub tab displays the exact time of four consecutive event logs with appropriate event flag. The TimeStamp Overwrite toggle button can be used to log the first four events or the last four events. Using the RESET button clears all the four TimeStamp Registers. Refer to the TimeStamp section in the MAX31334 data sheet for more information.

## RAM Register Mode

On the TimeStamp tab in the TimeStamp Configuration section, disable the TimeStamp Enable toggle button (default) to use the TimeStamp Mode. Reset the TimeStamp registers by clicking the RESET button each time after entering RAM Register Mode. The 32-byte TimeStamp registers are now available for use as RAM registers as displayed in the RAM sub tab.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX31334SHLD# | EV Kit |

#Denotes RoHS-compliant.

Evaluates: MAX31334

## MAX31334 Evaluation Kit

## MAX31334 EV Kit Bill of Materials

| REF DES                                   | MFG PART #               | VALUE          | DESCRIPTION                           |
|-------------------------------------------|--------------------------|----------------|---------------------------------------|
| C2, C7, C8, C15                           | CL05B105KQ5NQNC          | 1UF            | CAP; SMT (0402)                       |
| C3, C5, C9, C16-C18                       | CL05B104KQ5NNN           | 0.1UF          | CAP; SMT (0402)                       |
| C4, C11, C13, C19                         | C1005X7R1C104K050BC      | 0.1UF          | CAP; SMT (0402)                       |
| C10, C12, C14, C20                        | C0402C103J3RAC           | 0.01UF         | CAP; SMT (0402)                       |
| C23, C24                                  | C1608X7R1E104K080AA      | 0.1UF          | CAP; SMT (0603)                       |
| J1, J2                                    |                          |                | CONNECTOR; 10PINS                     |
| J5, J8-J10, JU4                           |                          |                | CONNECTOR; 3PINS                      |
| J11, JU2, JU6                             |                          |                | CONNECTOR; 4PINS                      |
| JU7, JU8, JU10, JU11, JU13, JU14, JU16    |                          |                | CONNECTOR; 2PINS                      |
| R1, R2, R5, R10                           | ERJ-2GEJ103              | 10K            | RES; SMT (0402); 10K                  |
| R3, R7-R9                                 | RC0402FR-0710KL          | 10K            | RES; SMT (0402); 10K                  |
| R6                                        | RC0402JR-070RL           | 0              | RES; SMT (0402                        |
| R11                                       | CRCW06030000Z0           | 0              | RES; SMT (0603                        |
| SU2, SU4, SU6-SU8, SU10, SU11, SU13- SU16 |                          |                | TEST POINT                            |
| SUPER-C                                   | KW-5R5C334-R             | 0.33F          | CAP; THROUGH HOLE- RADIAL LEAD; 0.33F |
| SW1                                       | TL2230EEF140             |                | SWITCH                                |
| TP1-TP3, TP5                              |                          |                | TEST POINT                            |
| TP4, TP6, TP7                             |                          |                | TEST POINT                            |
| TP10, TP13                                |                          |                | TEST POINT                            |
| U1                                        | MAX31334EWC+             |                | ADI RTC IC WLP                        |
| U2                                        | MAX31334ETB+             |                | ADI RTC IC QTFN                       |
| U5, U6                                    | NLSX4373MUTAG            | NLSX4373MUTAG  | IC; LEVEL TRANSLATOR                  |
| Y1, Y2                                    | NX2012SA-32.768K- EXS00A | 32.768KHZ XTAL | CRYSTAL; SMT; 32.768KHZ; 6PF          |
| C1, C6                                    |                          |                | DO NOT INSTALL                        |
| C21                                       |                          |                | DO NOT INSTALL                        |
| C22                                       |                          |                | DO NOT INSTALL                        |
| J3                                        |                          |                | DO NOT INSTALL                        |
| J4                                        |                          |                | DO NOT INSTALL                        |
| J6                                        |                          |                | DO NOT INSTALL                        |
| J7                                        |                          |                | DO NOT INSTALL                        |
| R4                                        |                          |                | DO NOT INSTALL                        |
| U7                                        |                          |                | DO NOT INSTALL                        |
| DS1, DS2                                  |                          |                | DO NOT INSTALL                        |
| R12, R13                                  |                          |                | DO NOT INSTALL                        |

## MAX31334 Evaluation Kit

## MAX31334 EV Kit Schematic

<!-- image -->

Evaluates: MAX31334

## MAX31334 Evaluation Kit

## MAX31334 EV Kit PCB Layout

MAX31334 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX31334 EV Kit PCB Layout -Bottom Layer

<!-- image -->

## Evaluates: MAX31334

MAX31334 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX31334 EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## MAX31334 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX31334