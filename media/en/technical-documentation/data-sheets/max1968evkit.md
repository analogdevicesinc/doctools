<!-- lastmod 2022-08-04 -->
## General Description

The MAX1968 evaluation kit (EV kit) is a fully assembled and tested PC board that implements a switch-mode driver for a Peltier thermoelectric cooler (TEC) module. It  operates from a single 3.0V to 5.5V supply and provides a bipolar ±3A (max) output to the module.

A potentiometer, DAC, or external source generates a DC temperature set-point voltage. Thermal feedback from the TEC module is compared to the set-point voltage to generate the TEC current-control signal. The MAX1968 accurately regulates the TEC current based on this signal.

When using the DAC, the EV kit connects to the parallel port of a computer running Windows® 95, 98, or 2000. Software, included with the EV kit, provides a quick and easy method to control the DAC.

Note: Windows 2000 requires the installation of a driver. Refer to Win2000.pdf or Win2000.txt located on the diskette.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                 |
|---------------|-------|-------------------------------------------------------------------------------------------------------------|
| C1, C15       |     2 | 1µF, 16V X5R ceramic capacitors (1206) Murata GRM319R71C105K Taiyo Yuden EMK316BJ105KF TDK C3216X7R1E105K   |
| C2-C6         |     5 | 1µF, 10V X5R ceramic capacitors (0805) Murata GRM21BR71A105K Taiyo Yuden LMK212BJ105MG TDK C2012X5R1A105K   |
| C7, C11       |     2 | 10µF, 6.3V X5R ceramic capacitors (1206) Murata GRM31CR60J106K Taiyo Yuden JMK316BJ106ML TDK C3216X5R0J106M |
| C8            |     1 | 0.01µF, 50V X7R ceramic capacitor (0603) Murata GRM188R71H103K Taiyo Yuden UMK107B103KZ TDK C1608X7R1H103K  |

## MXI

- ♦ ±3A Output Current
- ♦ Operates from a Single Supply (3.0V to 5.5V)
- ♦ High-Efficiency Switch-Mode Design
- ♦ 500kHz or 1MHz Switching Frequency
- ♦ Programmable Heating/Cooling Limit
- ♦ TEC Current-Monitor Output
- ♦ SPI™-Compatible Serial Interface
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Includes Windows 95/98/2000-Compatible Software and Demo PC Board
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | PIN-PACKAGE   |
|--------------|--------------|---------------|
| MAX1968EVKIT | 0°C to 70°C  | 28 TSSOP-EP*  |

Windows is a registered trademark of Microsoft Corp. SPI is a trademark of Motorola, Inc.

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                                                                          |
|-------------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------|
| C9                      |     0 | Not installed                                                                                                                        |
| C10, C12, C13, C14, C16 |     5 | 0.1µF, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K Taiyo Yuden EMK107BJ104KA TDK C1608X7R1C104K                          |
| C17                     |     1 | 0.022µF, 50V X7R ceramic capacitor (1206)                                                                                            |
| C18                     |     1 | 180µF, 6.3V, SP-capacitor Panasonic EEFUE0J181XR                                                                                     |
| J1                      |     1 | DB-25 male right-angle connector                                                                                                     |
| JU1, JU2, JU4           |     3 | 3-pin headers                                                                                                                        |
| JU3                     |     0 | Not installed                                                                                                                        |
| L1, L2                  |     2 | 3.3µH, 3.5A inductors Sumida CDRH6D38-3R3NC                                                                                          |
| Q1, Q2, Q3              |     3 | NPN bipolar transistors, SOT23 Central Semiconductor CMPT3904 Diodes Inc. MMBT3904 Fairchild MMBT3904 General Semiconductor MMBT3904 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

<!-- image -->

## Features

## MAX1968 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| R1            |     1 | 0.05 Ω ±1%, 0.5W sense resistor (2010) Vishay Dale WSL2010 0.050 1.0% IRC LRC-LR2010-01-R050-F |
| R2            |     1 | 49.9k Ω ±1% resistor (0603)                                                                    |
| R3, R4, R5    |     3 | 100k Ω ±1% resistors (0603)                                                                    |
| R6-R9         |     0 | Not installed                                                                                  |
| R10           |     1 | 510k Ω ±5% resistor (1206)                                                                     |
| R11, R14      |     2 | 10k Ω ±5% resistors (0603)                                                                     |
| R12           |     1 | 100k Ω ±5% resistor (0603)                                                                     |
| R13           |     1 | 10k Ω , temp coefficient = 25ppm/°C ±0.1% resistor (0805)                                      |

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                                        |
|--------------------|-------|----------------------------------------------------|
| R15, R16, R17, R21 |     4 | 1k Ω ±5% resistors (0603)                          |
| R18, R19, R20      |     3 | 4.7k Ω ±5% resistors (0603)                        |
| R22                |     1 | 10k Ω potentiometer                                |
| R23                |     1 | 240k Ω ±5% resistor (1206)                         |
| SW1                |     1 | Switch, momentary, normally open                   |
| U1                 |     1 | MAX1968EUI, 28-pin TSSOP-EP, driver for TEC module |
| U2                 |     1 | MAX4475ASA, 8-pin SO, op amp                       |
| U3                 |     1 | MAX4477ASA, 8-pin SO, dual op amp                  |
| U4                 |     1 | MAX5144EUB, 10-pin µMAX, DAC                       |
| None               |     3 | Shunts                                             |

## Component Suppliers

| SUPPLIER                          | PHONE        | FAX          | WEBSITE               |
|-----------------------------------|--------------|--------------|-----------------------|
| Central Semiconductor             | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Incorporated               | 805-446-4800 | 805-381-3899 | www.diodes.com        |
| Fairchild                         | 888-522-5372 | -            | www.fairchildsemi.com |
| General Semiconductor             | 760-804-9258 | 760-804-9259 | www.gensemi.com       |
| International Resistive Co. (IRC) | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata                            | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Panasonic                         | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Sumida                            | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden                       | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                               | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay Dale                       | 402-564-3131 | 402-563-6296 | www.vishay.com        |

Note: Please indicate you are using the MAX1968 when contacting these manufacturers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

## Required Equipment

Before beginning, the following equipment is required:

- A DC power supply capable of supplying any voltage between 3V and 5.5V at 3A
- A Peltier TEC module with a thermistor (10k Ω at +25 ° C)
- A digital voltmeter (DVM)

## Procedure

The MAX1968 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Place a shunt across pins 2 and 3 on JU1 to set the frequency to 500kHz.
- 2) Place a shunt across pins 2 and 3 on JU4 to select the potentiometer.
- 3) Place a shunt across pins 2 and 3 on JU2 to disable the MAX1968 output.
- 4) Obtain TEC module specifications for absolute maximum TEC voltage, absolute maximum cooling current, and absolute maximum heating current. Set these (or lower) limits at the MAX1968 MAXV, MAXIP (heating current), and MAXIN (cooling current) inputs. See Tables 1, 2, and 3 to select resistors or refer to the MAX1968 data sheet.
- 5) Connect the TEC module to OS1, OS2, THERM, and GND. Typical connections for most modules are:
- a) Module TEC- to OS1
- b) Module TEC+ to OS2
- c) Module thermistor to THERM
- d) Second module thermistor pin to GND
- e) Module case ground or shield to GND

Be sure to check module specifications before making connections. Also, it is recommended that the thermistor be connected through shielded wire for lowest noise.

- 6) Connect the DVM to SET-POINT-IN and GND.
- 7) Connect a 3.3VDC or 5VDC power supply with sufficient power rating to VDD and GND.
- 8) Turn on the power supply.
- 9) Adjust R22 until the DVM reads 0.75V. This adjusts the set point for approximately +25 ° C.
- 10) Move the DVM positive lead to THERM and verify a

<!-- image -->

## MAX1968 Evaluation Kit

## Table 1. Maximum TEC Voltage

|   V MAXV (V) | V TEC(MAX) (V)   |   R2 (k Ω ) |   R3 (k Ω ) |
|--------------|------------------|-------------|-------------|
|            1 | 4V               |        49.9 |         100 |
|         0.65 | 2.6V             |         130 |         100 |

## Table 2. Maximum Positive TEC Current

|   I TECP(MAX) (A) | R6 (k Ω )   | R7 (k Ω )   |
|-------------------|-------------|-------------|
|               3.0 | Short       | Open        |
|               1.5 | 100         | 100         |
|               1.0 | 100         | 49.9        |

## Table 3. Maximum Negative TEC Current

|   I TECN(MAX) (A) | R4 (k Ω )   | R5 (k Ω )   |
|-------------------|-------------|-------------|
|               3.0 | Short       | Open        |
|               1.5 | 100         | 100         |
|               1.0 | 100         | 49.9        |

voltage of approximately 0.75V. This represents +25 ° C at the TEC module.

- 11) Enable the MAX1968 by moving the shunt on JU2 to the 1 and 2 position.
- 12) After enabling the MAX1968, verify that the THERM voltage converges toward the set-point voltage on R22 (set to 0.75V in step 9) after approximately 30s. If the TEC is connected backwards, the THERM voltage moves away from 0.75V toward either 0V or 1.5V. If this occurs, shut down the MAX1968 and reverse the TEC+ and TEC- connections
- 13) Once operation is verified, other temperatures may be set with R22, the DAC, or an external voltage applied to SET-POINT-IN; 1V is approximately +10 ° C and 0.5V is approximately +40 ° C. The slope is approximately -14mV/ ° C.

## Detailed Description

## Voltage and Current-Limit Settings

The MAX1968 provides control of the maximum differential TEC voltage and the maximum positive and negative TEC current. The voltage on the MAXV pin of the MAX1968 sets the maximum differential TEC voltage. Use the following equations to set the voltage:

$$Voltage on MAXV: R2 + R3$$

$$Maximum TEC Voltage: = ×$$

$$V V TEC(MAX) MAXV 4$$

$$V R3 MAXV ( V) REF = ×$$

The components installed on the MAX1968 EV kit set

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1968 Evaluation Kit

VMAXV to 1V, for a maximum TEC voltage of 4V. See Table 1 and refer to the MAX1968 data sheet for more information. The voltages on the MAXIP and MAXIN pins set the maximum positive (heating) and negative (cooling) current through the TEC. Use the following equations to set the currents:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Voltage on MAXIN:

<!-- formula-not-decoded -->

Resistor values for R2 through R7 should be between 10k Ω and 100k Ω :

Maximum Positive TEC Current:

<!-- formula-not-decoded -->

where RSENSE (R1) is 50m Ω :

Maximum Negative TEC Current:

<!-- formula-not-decoded -->

The components installed on the MAX1968 EV kit limit the maximum positive current to +3A and the maximum negative current to -1.5A. See Tables 2 and 3, and refer to the MAX1968 data sheet for more information.

## Table 4. Jumper Selection

| JUMPER   | JUMPER POSITION   | FUNCTION                                                                             |
|----------|-------------------|--------------------------------------------------------------------------------------|
| JU1      | 1 and 2           | M AX 1968 sw i tchi ng fr eq uency i s 1M H z.                                       |
| JU1      | 2 and 3*          | MAX1968 switching frequency is 500kHz.                                               |
| JU2      | 1 and 2*          | SHDN = high. MAX1968 enabled.                                                        |
| JU2      | 2 and 3           | SHDN = low. MAX1968 disabled.                                                        |
| JU3      | Cut PC Trace      | Drive the CTLI pad directly with a DC voltage. Disconnects the thermal-loop circuit. |
| JU3      | Closed*           | Thermal control loop is closed. DAC or R22 generate temperature setpoint.            |
| JU4      | 1 and 2           | DAC generates temperature setpoint.                                                  |
| JU4      | 2 and 3*          | R22 generates temperature setpoint.                                                  |
| JU4      | Open              | Voltage applied to SET-POINT-IN generates temperature setpoint.                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper JU1

Jumper JU1 sets the switching frequency for the MAX1968. Positions 1 and 2 set the frequency to 1MHz. Positions 2 and 3 set the frequency to 500kHz.

## Jumper JU2

The MAX1968 can be placed in shutdown mode using jumper JU2. See Table 4 for jumper settings.

## Jumper JU3

Jumper JU3 connects the current-control input (CTLI) of the MAX1968 to the thermal loop circuit. The thermal loop circuit compares thermistor feedback from the TEC module to the set-point voltage to generate the CTLI signal.

To drive CTLI directly, cut the trace shorting JU3 and apply a DC voltage between 0 and 3V to the CTLI pad; 1.5V on CTLI sets a TEC current of approximately 0A. A voltage of 0V or 3V on CTLI produces -3A or +3A, respectively. The current changes proportionally with the voltage applied to CTLI.

Note: The current does not reach ±3A if the maximum positive and negative current limits are set to lower values. See the Voltage and Current-Limit Settings section and refer to the MAX1968 data sheet for more information.

## Jumper JU4

Jumper JU4, in positions 1 and 2, connects the DAC to the thermal loop circuit. Connect the EV kit to the parallel  port  of  a  computer  and  use  the  EV  kit  software  to control the DAC. Positions 2 and 3 connect potentiometer R22 to the thermal loop circuit.

To use an external voltage to control the thermal loop, remove the shunt from JU4 and apply the voltage to the SET-POINT-IN pad. A voltage of 0.75V corresponds to approximately +25 ° C; 1V is approximately +10 ° C and 0.5V is approximately +40 ° C. The slope is approximately -14mV/ ° C.

## Switch SW1

Switch SW1 resets the DAC to 0.75V.

## ITEC Current-Monitor Output

The ITEC output provides a voltage proportional to the actual TEC current. VITEC = REF when TEC current is zero. The actual TEC current is:

<!-- formula-not-decoded -->

Use ITEC to monitor the cooling or heating current through the TEC module. Positive values of ITEC indicate heating for typically connected modules. The maximum capacitance that ITEC can drive is 100pF.

<!-- image -->

## Using a Computer

## Required Equipment

In  addition  to  the  equipment listed under the Quick Start section, the following equipment is necessary:

- A computer running Windows 95, 98, or 2000. Note: Windows 2000 requires the installation of a driver; refer to Win2000.pdf or Win2000.txt located on the diskette.
- A parallel printer port (this is a 25-pin socket on the back of the computer).
- A standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the MAX1968 EV kit.

## Procedure

- 1) Place a shunt across pins 2 and 3 on JU1 to set the frequency to 500kHz.
- 2) Place a shunt across pins 1 and 2 on JU4 to select the DAC.
- 3) Place a shunt across pins 2 and 3 on JU2 to disable the MAX1968 output.
- 4) Obtain TEC module specifications for absolute maximum TEC voltage, absolute maximum cooling current, and absolute maximum heating current. Set these (or lower) limits at the MAX1968 MAXV, MAXIP (heating current), MAXIN (cooling current) inputs. See Tables 1, 2, and 3 to select resistors or refer to the MAX1968 data sheet.
- 5) Connect the TEC module to OS1, OS2, THERM, and GND. Typical connections for most modules are:
- a) Module TEC- to OS1
- b) Module TEC+ to OS2
- c) Module thermistor to THERM
- d) Second module thermistor pin to GND
- e) Module case ground or shield to GND

Be sure to check module specifications before making connections. Also, it is recommended that the thermistor be connected through shielded wire for lowest noise.

- 6) Connect a cable from the computer's parallel port to  the  MAX1968 EV kit. Use a straight-through 25pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.

<!-- image -->

## MAX1968 Evaluation Kit

- 7) The MAX1968.EXE software program can be run from the floppy or hard drive. Use the Windows program manager to run the program. If desired, the INSTALL.EXE program may be used to copy the files  and  create icons for them in the Windows 95/98/2000 start menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.
- 8) Connect a 3.3VDC or 5VDC power supply with sufficient power rating to VDD and GND.
- 9) Turn on the power supply.
- 10) Start the MAX1968 program by opening its icon in the start menu. At program startup, the software forces the DAC to 0.75V, which corresponds to approximately +25 ° C.
- 11) Connect the DVM to THERM and verify a voltage of approximately 0.75V. This represents +25 ° C at the TEC module.
- 12) Enable the MAX1968 by moving the shunt on JU2 to the 1 and 2 position.
- 13) After enabling the MAX1968, verify that the THERM voltage converges toward the DAC voltage (0.75V) after  approximately 30s. If the TEC is connected backwards, the THERM voltage moves away from 0.75V toward either 0V or 1.5V. If this occurs, shut down the MAX1968 and reverse the TEC+ and TEC- connections.
- 14) Once operation is verified, other temperatures may be set with the DAC. See the User Interface section.

## User Interface

The user interface is easy to operate. Use either the mouse or the Tab key to navigate. To program the DAC, enter the ratio of the desired DAC output voltage (VDAC) to the reference voltage (REF). See the equation below:

<!-- formula-not-decoded -->

where REF = 1.5V. The ratio must be a decimal number between 0 and 1. Press Enter or click on the Update button to send the data to the DAC. A ratio of 0.67 sets the  DAC output to 1V, which corresponds to approximately +10 ° C. A ratio of 0.33 sets the DAC output to 0.5V, or approximately +40 ° C. The slope is approximately -14mV/ ° C.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1968 Evaluation Kit

## General-Purpose SPI Utility

There are two methods for communicating with the MAX5144 DAC: through the user-interface panel or through the general-purpose SPI utility. This utility (Figure 3) configures SPI parameters such as clock polarity  (CPOL), clock phase (CPHA), and chip-select (CS) polarity.

The fields where pin numbers are required apply to the pins of the parallel port connector.

The utility  handles the data only in byte (8-bit) format. Data longer than a byte must be handled as multiple bytes. For example, a 16-bit word should be broken into two 8-bit bytes.

To write data to the slave device, enter the data into the field labeled Data Bytes to be Written. Each data byte should be hexadecimal, prefixed by 0x, and separated with a comma. Press the Send Now button to write the data to the slave.

To read data from the slave device, the field labeled Data Bytes to be Written must contain hexadecimal values. Include the same number of bytes as to be read from the slave.

Note: The MAX5144 is a write-only device and cannot be read.

Figure 1. Thermal Loop Functional Diagram for the MAX1968 EV Kit

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1968 Evaluation Kit

Figure 2. Main Window for the MAX1968 EV Kit

<!-- image -->

Figure 3. SPI Utility Showing the Settings to Communicate with the MAX1968 EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1968 Evaluation Kit

Figure 4. MAX1968 EV Kit Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1968 Evaluation Kit

Figure 5. MAX1968 EV Kit Schematic-Thermal Loop

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1968 Evaluation Kit

<!-- image -->

Figure 6. MAX1968 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 8. MAX1968 EV Kit PC Board Layout (2oz Copper)Component Side

Figure 7. MAX1968 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 9. MAX1968 EV Kit PC Board Layout (2oz Copper)Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 10. MAX1968 EV Kit PC Board Layout (2oz Copper)Power Plane

<!-- image -->

## MAX1968 Evaluation Kit

Figure 11. MAX1968 EV Kit PC Board Layout (2oz Copper)Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_