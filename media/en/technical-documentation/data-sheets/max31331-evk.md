<!-- lastmod 2024-09-20 -->
<!-- image -->

## General Description

The  MAX31331  shield  evaluation  kit  (EV  kit)  is  a  fully assembled and tested PCB to evaluate the MAX31331, an ultra-low power, low-cost, real-time clock (RTC) with I 2 C interface  and  power  management.  The  shield  operates from a single supply (either from USB or external power supply)  and  the  onboard  crystal  provides  a  32.768  kHz clock signal. This device is accessed through an I 2 C serial interface provided by a MAX32625PICO board connected to a PC by a USB port.

The MAX31331 shield EV kit provides the hardware and software graphic user interface (GUI) necessary to evaluate  the  MAX31331.  The  kit  includes  an  installed MAX31331. It connects to the PC through a MAX32625 PICO board and a micro-USB cable.

## Features

- Easy Evaluation of the MAX31331
- +1.1V to +5.5V Single-Supply Operation
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- Assembled circuit board, including the MAX31331
- Assembled MAX32625PICO I 2 C circuit board
- Micro-USB cable

## MAX31331 EV Kit Files

| FILE              | DESCRIPTION                         |
|-------------------|-------------------------------------|
| MAX31331EVKIT.exe | Installs EV kit files onto computer |

Ordering Information appears at end of data sheet.

319-100849; Rev 1; 8/24

## MAX31331 Evaluation Kit

## Quick Start

## Required Equipment

- One DC power supply capable of supplying +1.1V to +5.5V (typical +3.0V used in the following instructions)
- One pico ammeter for measuring the current
- One oscilloscope
- One micro-USB cable
- One assembled MAX32625PICO I 2 C circuit board
- One MAX31331 shield EV kit

## EV Kit Photo

<!-- image -->

## Procedure

The EV kit is fully assembled and tested. Follow these steps to verify board operation.

1. Place the MAX31331 EV kit on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
2. Set the jumpers to their default positions as shown in Table 1 to test the WLP package variant (U1) of MAX31331. Alternatively, set the jumpers to their default positions as shown in Table 2 to test the TDFN package variant (U2) of MAX31331.
3.  With the output of the power supply set to +3.0V and disabled, connect the positive terminal of the DC supply to the VCC\_EXT and negative terminal to the GND of the EV kit.
4.  Connect the MAX32625PICO I 2 C circuit board to the EV kit at its location ( Figure 1 ).
5.  Connect the micro-USB cable between the MAX32625PICO board and PC/laptop.
6.  Enable the +3.0V DC power supply.
7.  Click on the Design and Development tab on the product folder page to download the latest version of the MAX31331 real-time clock EV kit software and run the control software.
8.  Open the MAX31331 real-time clock EV kit software; this displays the MAX31331 Real-Time Clock EV Kit Software Monitor page and shows 'USB Connected' in the lower right corner.
9. Verify that the clock has started counting by checking the 'Auto Update' box under Real Time Monitoring.
10.  Configure the desired date and time in Date/Time Configuration section and click the SET button to update it in the Real Time Monitoring section.

Figure 1. MAX31331 EV Kit Board Connections for WLP IC

<!-- image -->

Figure 2. MAX31331 EV Kit Board Connections for TDFN IC

<!-- image -->

## Table 1. Jumper Setting to Test WLP IC

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                               |
|----------|------------------|-----------------------------------------------------------------------------------------------------------|
| JU2      | 1 - 2            | Connects VBAT pin to TP2.                                                                                 |
| JU2      | 1 - 3            | Connects VBAT pin to GND.                                                                                 |
| JU2      | 1 - 4*           | Connects VBAT pin to Supercapacitor.                                                                      |
| JU4      | 1 - 2*           | System VCC is powered by VCC_EXT at TP5.                                                                  |
| JU4      | 2 - 3            | System VCC is powered by a +3.3V supply from Arm® Mbed ™ /Arduino®/PICO platform.                         |
| JU6      | 1 - 2            | Connects INTA pin of U1 to ground.                                                                        |
| JU6      | 1 - 3*           | Connects INTA pin of U1 to Arm Mbed/Arduino/PICO platform through a level translator (U5)                 |
| JU6      | 1 - 4            | Connects INTA pin of U1 to test point TP3 with a 10kΩ pullup resistor to system VCC.                      |
| JU7      | 1 - 2*           | . System VCC connects to VCC pin of U1.                                                                   |
| JU7      | OPEN             | Float VCC pin of U1. Connect an ammeter between pin 1 and pin 2 to measure the current consumption of U1. |
| JU8      | 1 - 2            | System VCC powers U2 VCC pin.                                                                             |
| JU8      | OPEN*            | Floats VCC pin of U2. Connect an ammeter between the pins of JU8 to measure the current.                  |
| JU10     | 1 - 2*           | consumption of U2. Connects SDA pin of U1 and U2 to Arm Mbed/Arduino/PICO platform for GUI control.       |
| JU10     | OPEN             | Floats SDA pin for user's own I 2C control.                                                               |
| JU11     | 1 - 2*           | Connects SCL pin of U1 and U2 to Arm Mbed/Arduino/PICO platform for GUI control.                          |
| JU11     | OPEN             | Floats SCL pin for user's own I 2C control.                                                               |
| JU13     | 1 - 2*           | Connects power backup selection VBAT at JU2 to VBAT pin of U1.                                            |
| JU13     | OPEN             | Floats VBAT pin of U1 for user's signal input.                                                            |
| JU14     | 1 - 2            | Connects power backup selection VBAT at JU2 to VBAT pin of U2.                                            |
| JU14     | OPEN*            | Floats VBAT pin of U2 for user's signal input.                                                            |
| JU16     | 1-2*             | Connects INTB /CLKOUT pin of U1 to Arm Mbed/Arduino/PICO platform for GUI control.                        |
| JU16     | OPEN             | Floats INTB /CLKOUT pin for user's own control.                                                           |
| JU15     | 1 - 2            | U2                                                                                                        |
| JU15     | 2 - 3*           | U1                                                                                                        |

*Default options are bold

System VCC is labeled VCC on the PCB.

Table 2. Jumper Setting to Test TDFN IC

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                               |
|----------|------------------|-----------------------------------------------------------------------------------------------------------|
| JU2      | 1 - 2            | Connects VBAT pin to TP2.                                                                                 |
| JU2      | 1 - 3            | Connects VBAT pin to GND.                                                                                 |
| JU2      | 1 - 4*           | Connects VBAT pin to Supercapacitor.                                                                      |
| JU4      | 1 - 2*           | System VCC is powered by VCC_EXT at TP5.                                                                  |
| JU4      | 2 - 3            | System VCC is powered by a +3.3V supply from Arm® Mbed ™ /Arduino®/PICO platform.                         |
| JU6      | 1 - 2            | Connects INTA pin of U1 to ground.                                                                        |
| JU6      | 1 - 3*           | Connects INTA pin of U1 to Arm Mbed/Arduino/PICO platform through a level translator (U5)                 |
| JU6      | 1 - 4            | Connects INTA pin of U1 to test point TP3 with a 10kΩ pullup resistor to system VCC.                      |
| JU7      | 1 - 2            | . System VCC connects to VCC pin of U1.                                                                   |
| JU7      | OPEN*            | Float VCC pin of U1. Connect an ammeter between pin 1 and pin 2 to measure the current consumption of U1. |
| JU8      | 1 - 2*           | System VCC powers U2 VCC pin.                                                                             |
| JU8      | OPEN             | Floats VCC pin of U2. Connect an ammeter between the pins of JU8 to measure the current.                  |
| JU10     | 1 - 2*           | consumption of U2. Connects SDA pin of U1 and U2 to Arm Mbed/Arduino/PICO platform for GUI control.       |
| JU10     | OPEN             | Floats SDA pin for user's own I 2C control.                                                               |
| JU11     | 1 - 2*           | Connects SCL pin of U1 and U2 to Arm Mbed/Arduino/PICO platform for GUI control.                          |
| JU11     | OPEN             | Floats SCL pin for user's own I 2C control.                                                               |
| JU13     | 1 - 2            | Connects power backup selection VBAT at JU2 to VBAT pin of U1.                                            |
| JU13     | OPEN*            | Floats VBAT pin of U1 for user's signal input.                                                            |
| JU14     | 1 - 2*           | Connects power backup selection VBAT at JU2 to VBAT pin of U2.                                            |
| JU14     | OPEN             | Floats VBAT pin of U2 for user's signal input.                                                            |
| JU16     | 1-2*             | Connects INTB /CLKOUT pin of U1 to Arm Mbed/Arduino/PICO platform for GUI control.                        |
| JU16     | OPEN             | Floats INTB /CLKOUT pin for user's own control.                                                           |
| JU15     | 1 - 2*           | U2                                                                                                        |
| JU15     | 2 - 3            | U1                                                                                                        |

System VCC is labeled VCC on the PCB.

## Detailed Description

The  MAX31331  is  an  ultra-low  power,  real-time  clock  (RTC)  time-keeping  device  that  consumes  nominal  65nA timekeeping current, extending battery life. The MAX31331 supports a wide range of 32.768kHz crystals. Crystals with any capacitive loading (CL) spec can be used, which broadens the pool of usable crystals for this device. This device is accessed through an I 2 C serial interface. The device also features a backup supply (VBAT) and automatically switches over to the backup supply (VBAT) when the main supply (VCC) drops below the programmed threshold voltage and the backup supply (VBAT) voltage.

Other features include two time-of-day alarms, interrupt outputs, a programmable square-wave output, event detection input with timestamping, and a serial bus timeout mechanism. The 32-byte timestamp registers double as RAM storage. The device features a digital Schmitt trigger input (DIN) which can be used to record timestamps and/or generate an interrupt on the falling/rising edge of the DIN signal. The clock/calendar provides seconds, minutes, hours, day, month, year, and date information. A 1/128 second register is available for a sub-second timestamp resolution. The date at the end of the month is automatically adjusted for months with fewer than 31 days, including corrections for leap year. The clock operates in a 24-hour/12-hour format.

## Functional Test Procedure

## Current Draw at Time-Keeping Operation

1. To measure the current drawn under normal Real-Time Clock conditions without any interrupt or clock input/output, do the following:
- a. In the RTC Configuration section, click the Read button.
- b. Disable CLKOUT.
- c. Select 1Hz for Frequency.
2.  For WLP version (U1), remove the jumper from JU7 and connect the pico ammeter between pin 1 and pin 2 of JU7. For TDFN version (U2), remove the jumper from JU8 and connect the pico ammeter between pin 1 and pin 2 of JU8.
3.  In the Registers tab under the Register Map section, click the Read button and ensure that the value of register 0x03 (RTC\_Config1) shows 0x01. Otherwise, set it to 0x01 and click the Write button. Now the reading in the picometer is the current from MAX31331 only. It should be around 65nA.

NOTE: All  instruments  need  to  be  disconnected  from  the  I/O  ports  of  the  IC,  since  any  loading  would  add  current consumption.

4.  Remove pico ammeter and replace the jumper on JU7 (for WLP version) or JU8 (for TDFN version).

## Setting the Clock

In the Configuration &amp; Time tab in the Date/Time Configuration section, enter the start point of date and time and then click Set. The clock starts to count from the set point after the Status Log shows 'Write successful'. In the Real Time Monitoring section, verify that the clock is counting from the written start date and time.

## Clock Output Measurement

In  the  Configuration &amp; Time tab in the RTC Configuration section, enable CLKOUT and select the desired CLKOUT frequency. The clock output can be monitored using an oscilloscope connected to INTB /CLKOUT. A frequency counter can also be used to measure the clock frequency accurately. Refer to the Oscillator Circuit &amp; Clock Accuracy section in the MAX31331 datasheet to correct any clock accuracy error.

## Alarm Interrupt Output

On the Alarms &amp; Timer tab in the Alarm 1 Configuration section, select the Repetition Rate to set the alarm scenario. In the Interrupts subsection of the Interrupts &amp; Flags section, check the Alarm 1 Interrupt box. In the Flags subsection, click the Read button twice to clear the alarm flag bit if it has been previously set. When the RTC reaches the alarm time set in Alarm 1 Configuration, the alarm output at INTB goes from high to low. It changes to high again by clicking the Read button  in  the  Flags  subsection.  The  interrupt  status  can  also  be  checked  by  clicking  the  Read  button  in  the  Flags subsection. Repeat the same steps for Alarm 2, but measure the alarm interrupt output at INTA .

Note: Both Alarm 1 and Alarm 2 can be output on INTA when CLKOUT is enabled.

## Timer Interrupt

Clear all interrupt bits by clicking the Read button in the Flags subsection. Enable the Timer and Interrupt by checking Timer Enable in the Timer Configuration section and Timer Interrupt in the Interrupts subsection, then select 16Hz on Timer Frequency. Set the Timer Init number to a value, such as 200. When the Timer Count reading reaches 0 from 200, the interrupt output at INTA /CLKIN should go from high to low.

## Power Mode Select

On the Configuration &amp; Time tab in the Power Management section, the trickle charger can be enabled to charge the onboard supercapacitor as a backup battery. The Supply Select drop-down list can be used to select the source of the power supply. VCC means that the IC uses the main supply and VBAT means that the IC uses the supply from the backup battery.  The  backup  battery  source  can  be  either  be  the  on-board  supercapacitor  or  external  backup  supply  that  is connected to the TP2 (VBAT) test point. In Auto, the supply switches between VCC and VBAT automatically based on the PV Fail threshold set. To verify which supply is utilized, click the READ button in the Flags subsection. Also, the supercapacitor voltage at VBAT (JU2VBAT) can be charged to 'VCC minus diode drop voltage' at a selectable rate in the pull-down menu.

## Time Stamping Mode

On the TimeStamp tab in the TimeStamp Configuration section, click on the TimeStamp Enable toggle button to enable the TimeStamp Mode. Any of the three TimeStamp event log conditions can be configured by toggling the respective event enable toggle buttons on the Record TimeStamp on section. The TimeStamps sub tab displays the exact time of four consecutive event logs with appropriate event flag. The TimeStamp Overwrite toggle button can be used to log the first four events or the last four events. Using the RESET button clears all the four TimeStamp Registers. Refer to the TimeStamp section in the MAX31331 data sheet for more information.

## RAM Register Mode

On the TimeStamp tab, in the TimeStamp Configuration section, disable the TimeStamp Enable toggle button (default) to use the TimeStamp Mode. Reset the TimeStamp registers by clicking the RESET button each time after entering RAM Register Mode. The 32 byte TimeStamp registers are now available for use as RAM registers as displayed in the RAM sub tab.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX31331SHLD# | EV Kit |

#Denotes RoHS-compliant.

## MAX31331 EV Kit Bill of Materials

|   ITEM | REF_DES              | DNI/ DNP   |   QTY | MFG PART #                                                                                                                                                                | MANUFACTURER                                                                                                                         | VALUE          | DESCRIPTION                                                                        |
|--------|----------------------|------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|----------------|------------------------------------------------------------------------------------|
|      1 | C2, C7, C8, C15      | -          |     4 | CL05B105KQ5NQNC; GRM155R70J105KA12                                                                                                                                        | SAMSUNG ELECTRONICS; MURATA                                                                                                          | 1UF            | CAP; SMT (0402); 1UF; 10%; 6.3V; X7R; CERAMIC                                      |
|      2 | C3, C5, C9, C16- C18 | -          |     6 | CL05B104KQ5NNN                                                                                                                                                            | SAMSUNG                                                                                                                              | 0.1UF          | CAP; SMT (0402); 0.1UF; 10%; 6.3V; X7R; CERAMIC ;                                  |
|      3 | C4, C11, C13, C19    | -          |     4 | C1005X7R1C104K050C ; ATC530L104KT16; 0402YC104KAT2A; C0402X7R160104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5 | TDK; AMERICAN TECHNICAL CERAMICS; AVK; VENKEL LTD.; SAMSUNG ELECTRONICS; MURATA;TDK; YAGEO PHICOMP; TAIYO YUDEN; SAMSUNG ELECTRONICS | 0.1UF          | CAP; SMT (0402); 0.1UF; 10%; 16V; X7R; CERAMIC                                     |
|      4 | C10, C12, C14, C20   | -          |     4 | C0402C103J3RAC                                                                                                                                                            | KEMET                                                                                                                                | 0.01UF         | CAP; SMT (0402); 0.01UF; 5%; 25V; X7R; CERAMIC                                     |
|      5 | J1, J2               | -          |     2 | 75915-310LF                                                                                                                                                               | FCI CONNECT                                                                                                                          | 75915-310LF    | CONNECTOR; FEMALE; THROUGH HOLE; STRAIGHT; 10PINS                                  |
|      6 | J3                   | -          |     1 | SSQ-110-04-G-S                                                                                                                                                            | SAMTEC                                                                                                                               | SSQ-110-04-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS ;         |
|      7 | J4                   | -          |     1 | SSQ-106-03-G-S                                                                                                                                                            | SAMTEC                                                                                                                               | SSQ-106-03-G-S | CONNECTOR; MALE; THROUGH HOLE; THROUGH-HOLE .025 SQ POST SOCKET ; STRAIGHT; 6PINS  |
|      8 | J6                   | -          |     1 | SSQ-108-03-G-S                                                                                                                                                            | SAMTEC                                                                                                                               | SSQ-108-03-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS            |
|      9 | J7                   | -          |     1 | SSQ-108-04-G-S                                                                                                                                                            | SAMTEC                                                                                                                               | SSQ-108-04-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS ;          |
|     10 | JU2, JU6             | -          |     2 | TSW-104-07-L-S                                                                                                                                                            | SAMTEC                                                                                                                               | TSW-104-07-L-S | EVKIT PART- CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS |

|   11 | JU4, JU15                                 | -   |   2 | PEC03SAAN                         | SULLINS                                | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                |
|------|-------------------------------------------|-----|-----|-----------------------------------|----------------------------------------|--------------|----------------------------------------------------------------------------------------------------------|
|   12 | JU7, JU8, JU10, JU11, JU13, JU14, JU16    | -   |   7 | PBC02SAAN                         | SULLINS                                | PBC02SAAN    | EVKIT PART- CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;            |
|   13 | R1, R2, R5, R10                           | -   |   4 | ERJ-2GEJ103                       | PANASONIC                              | 10K          | RES; SMT (0402); 10K; 5%; +/-200PPM/DEGC; 0.1000W                                                        |
|   14 | R3, R7-R9                                 | -   |   4 | CRCW040210K0FK; RC0402FR-0710KL   | VISHAY DALE; YAGEO PHICOMP             | 10K          | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                        |
|   15 | R6                                        | -   |   1 | RC0402JR-070RL; CR0402-16W-000RJT | YAGEO PHYCOMP; VENKEL LTD.             | 0            | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                  |
|   16 | R11                                       | -   |   1 | CRCW06030000Z0                    | VISHAY DALE                            | 0            | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                              |
|   17 | SU2, SU4, SU6-SU8, SU10, SU11, SU13- SU16 | -   |  11 | S1100-B;SX1100-B; STC02SYAN       | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED |
|   18 | SUPER-C                                   | -   |   1 | KW-5R5C334-R                      | EATON                                  | 0.33F        | CAP; THROUGH HOLE-RADIAL LEAD; 0.33F; +80%/-20%; 5.5V; ALUMINUM- ELECTROLY TIC ;                         |
|   19 | SW1                                       | -   |   1 | AYZ0202AGRLC                      | C&K COMPONENTS                         | AYZ0202AGRLC | SWITCH; DPDT; SMT; 12V; 0.1A; MINIATURE SLIDE SWITCHES; RCOIL=0.08 OHM; RINSULATION=100M OHM             |
|   20 | TP1-TP3, TP5                              | -   |   4 | 5010                              | KEYSTONE                               | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;    |
|   21 | TP4, TP6, TP7                             | -   |   3 | 5011                              | KEYSTONE                               | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN;                                                       |

|    |        |      |    |                                                                                                                                                                            |                                                                                                                                    |               | BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                          |
|----|--------|------|----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------|
| 22 | U1     | -    |  1 | MAX31331_WLP                                                                                                                                                               | MAXIM                                                                                                                              | MAX31331_WLP  | EVKIT PART - IC; PACKAGE OUTLINE: 21-100554; PACKAGE CODE: W121P1+1; WLP12                                    |
| 23 | U2     | -    |  1 | MAX31331_TDFN                                                                                                                                                              | MAXIM                                                                                                                              | MAX31331_TDFN | EVKIT PART - IC; PACKAGE OUTLINE: 21-0137; PACKAGE CODE:T1033+1C; PACKAGE OUTLINE DRAWING: 90-0003; TDFN10-EP |
| 24 | U3, U4 | -    |  2 | MAX14689AETB+                                                                                                                                                              | MAXIM                                                                                                                              | MAX14689AETB+ | IC; ASW; ULTRA-SMALL LOW- RON BEYOND-THE-RAILS DPDT ANALOG SWITCHES; TDFN10-EP                                |
| 25 | U5, U6 | -    |  2 | NLSX4373MUTAG                                                                                                                                                              | ON SEMICONDUCTOR                                                                                                                   | NLSX4373MUTAG | IC; TRANS; 2-BIT 20 MB/S DUAL-SUPPLY LEVEL TRANSLATOR; UDFN8                                                  |
| 26 | Y1, Y2 | -    |  2 | NX2012SA-32.768K- EXS00A                                                                                                                                                   | NIHON DEMPA KOGYO CO                                                                                                               | 32.768KHZ     | CRYSTAL; SMT 2.05 MMX1.2 MM; 6PF; 32.768KHZ; +/-20PPM ;                                                       |
| 27 | PCB    | -    |  1 | MAX31331SHIELD                                                                                                                                                             | MAXIM                                                                                                                              | PCB           | PCB:MAX31331SHIEL D                                                                                           |
| 28 | C1, C6 | DN P |  0 | TAJC106K016RNJ                                                                                                                                                             | AVX                                                                                                                                | 10UF          | CAP; SMT (6032); 10UF; 10%; 16V; TANTALUM                                                                     |
| 29 | C21    | DN P |  0 | C1005X7R1C104K050C ; ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5 | TDK;AMERICAN TECHNICAL CERAMICS;AVK; VENKEL LTD.; SAMSUNG ELECTRONICS; MURATA;TDK; YAGEO PHICOMP; TAIYO YUDEN; SAMSUNG ELECTRONICS | 0.1UF         | CAP; SMT (0402); 0.1UF; 10%; 16V; X7R; CERAMIC                                                                |
| 30 | C22    | DN P |  0 | C0402C103J3RAC                                                                                                                                                             | KEMET                                                                                                                              | 0.01UF        | CAP; SMT (0402); 0.01UF; 5%; 25V; X7R; CERAMIC                                                                |
| 31 | R4     | DN P |  0 | N/A                                                                                                                                                                        | N/A                                                                                                                                | OPEN          | PACKAGE OUTLINE 0402 RESISTOR                                                                                 |
| 32 | U7     | DN P |  0 | AD8244BRMZ                                                                                                                                                                 | ANALOG DEVICES                                                                                                                     | AD8244BRMZ    | IC; BUF; SINGLE-SUPPLY; LOW POWER; PRECISION FET INPUT                                                        |

| QUAD BUFFER BUFFER; MSOP10   |
|------------------------------|

## MAX31331 EV Kit Schematic

<!-- image -->

F

D

C

B

A

## MAX31331 EV Kit PCB Layout

<!-- image -->

MAX31331 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX31331 EV Kit PCB Layout -Bottom Layer

MAX31331 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX31331 EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX31331

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/22            | Initial release                                                                                   | -               |
|                 1 | 8/24            | Updated Procedure and Current Draw at Time-Keeping Operation sections, added Figure 2 and Table 2 | 2, 4, 6, 7      |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.

## MAX31331 Evaluation Kit