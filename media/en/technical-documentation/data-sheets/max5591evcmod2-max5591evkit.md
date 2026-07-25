<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5591 Evaluation Kit/Evaluation System

## General Description

The  MAX5591  evaluation  system  (EV  system) (MAX5591EVCMOD2) is a complete 8-channel, 12-bit data-generation system consisting of a MAX5591 evaluation  kit  (EV  kit)  and  the  Maxim  CMOD232 command module. Order the EV kit (MAX5591EVKIT) separately if the user has an SPI™ master or if the CMOD232 command module has been purchased previously.

The EV kit comes with the MAX5591AEUI installed. Contact the factory for free samples of the pin-compatible MAX5591\_EUI/MAX5593\_EUI/MAX5595\_EUI to evaluate these devices.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                        |
|--------------------|-------|--------------------------------------------------------------------|
| C1, C4             |     2 | 10µF ± 20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M  |
| C2, C3, C5, C6, C7 |     5 | 0.1µF ± 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104KT |
| FB1                |     1 | Surface-mount ferrite bead (0603) TDK MMZ1608B601C                 |
| J1                 |     1 | 2 x 20 right-angle female connector                                |
| J2                 |     1 | 20-pin 2 x 10 header                                               |
| JU1, JU2, JU6      |     3 | 3-pin headers                                                      |
| JU3, JU4, JU5      |     0 | Not installed (pins shorted on PC board for customer to cut)       |
| R1-R16             |    16 | 10k Ω ± 0.1% resistors (0805)                                      |
| R17-R32            |     0 | Not installed, thru-hole resistors                                 |
| R33, R35           |     2 | 100k Ω ± 5% resistors (0805)                                       |
| R34, R36           |     2 | 1k Ω ± 5% resistors (0805)                                         |
| R37                |     1 | 10k Ω ± 5% resistor (0805)                                         |
| SW1, SW2           |     2 | Pushbutton switches, momentary, normally open                      |
| U1                 |     1 | MAX5591AEUI (28-pin TSSOP)                                         |
| U2                 |     1 | +2.5V voltage reference (8-pin SO) Maxim MAX6126AASA25             |
| -                  |     3 | Shunts                                                             |
| -                  |     1 | MAX5591 EV kit PC board                                            |
| -                  |     1 | MAX5591 EV kit software CD                                         |

SPI is a trademark of Motorola, Inc. Windows is a registered trademark of Microsoft Corp.

Features

- ♦ Proven PC Board Layout
- ♦ Windows ® 95-/98-/2000-/XP-Compatible Evaluation Software
- ♦ Pushbutton Switches for Easy UPIO\_ Evaluation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE       | INTERFACE TYPE           |
|----------------|------------------|--------------------------|
| MAX5591EVKIT   | 0 ° C to +70 ° C | User-supplied SPI master |
| MAX5591EVCMOD2 | 0 ° C to +70 ° C | Windows software         |

Note: The MAX5591 software is included with the MAX5591 EV kit but is designed for use with the complete EV system. The EV system includes both the Maxim command module and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim command module.

Note: To evaluate the MAX5591\_EUI/MAX5593\_EUI/ MAX5595\_EUI, request a free sample when ordering the MAX5591 EV kit.

## MAX5591EVCMOD2 Component List

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX5591EVKIT |     1 | MAX5591 EV kit         |
| CMOD232      |     1 | CMOD232 command module |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MAX5591 when contacting these component suppliers.

## MAX5591 EV Kit Files

| FILE         | DESCRIPTION                                |
|--------------|--------------------------------------------|
| INSTALL.EXE  | Installs the EV kit files on your computer |
| MAX5591.EXE  | Application program                        |
| HELPFILE.HTM | MAX5591 EV kit help file                   |
| UNINST.INI   | Uninstalls the EV kit software             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX5591 Evaluation Kit/Evaluation System

## Quick Start

## Recommended Equipment

- Maxim MAX5591EVCMOD2 EV system (contains the MAX5591 EV kit and the CMOD232 command module)
- Wall cube: +9V at 200mA (included with the CMOD232)
- Power supply: +5V at 100mA (AVDD)
- Digital voltage meter (DVM)
- User-supplied 9-pin I/O extension cable
- User-supplied Windows 95/98/2000/XP PC with an available RS-232 serial port

Note: In the following section(s), sotware-related items are identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underline refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

Do not turn on the power until all connections are made.

- 1) Verify the shunt for jumper J1 on the CMOD232 module is connected to pins 2-3. This sets the logic supply to 5V (see Table 2).
- 2) Verify the shunt for jumper JU1 on the MAX5591 EV kit is connected to pins 2-3. This sets the DAC outputs to zero on power-up.
- 3) Verify the shunt for jumper JU2 on the MAX5591 EV kit is connected to pins 2-3. This connects the UPIO1 line to the SPI MISO line of the CMOD232 module.
- 4) Verify the shunt for jumper JU6 on the MAX5591 EV kit is connected to pins 1-2. This ensures SPI data is clocked in on the rising edge of SCLK.
- 5) Connect the 40-pin female connector (J1) of the MAX5591 EV kit to the 40-pin male connector (P4) of the CMOD232 module.
- 6) Connect the 9-pin serial cable from the computer's serial  port  to  the  DB9  connector  (P2)  of  the CMOD232 module. The EV kit software checks the modem status lines (CTS, DSR, and DCD) to confirm that the correct port has been selected.
- 7) Install  the  MAX5591 evaluation software on your computer by running the INSTALL.EXE program from the installation CD-ROM. The program files are copied and icons are created for them in the Windows Start Menu.
- 8) Connect the +5V power supply between the MAX5591 EV kit's AVDD and AGND pads. Turn on the +5V power supply.
- 9) Connect the +9V wall cube to the power connector (P1) of the CMOD232.
- 10) Start  the  MAX5591 EV kit software by opening its icon in the Start Menu.
- 11) Using the Load Input and Output (From Shift) tab, press the Load All DACs button.
- 12) Verify  that  all Output Register Code and Voltage labels update with 0x800 and 1.25V respectively at the bottom of the MAX5591 EV kit software's main window.
- 13) Measure the voltage at OUTA (J2-3) using the DVM and verify that the voltage is 1.25V.

## Detailed Description of Software

The main window of the evaluation software (shown in Figure 1) displays the voltage and code for all DAC input and output registers. In addition, the main window also shows the shutdown and settling time status for all of the DACs. Table 1 describes the controls that are always present on the evaluation software's main window.

The Load Input (From Shift) tab,  shown in Figure 2, allows the user to load the input register of the corresponding DAC with the data that is sent to the shift register. The user can load all four DACs individually or all at  once by pressing the appropriate button. If the AutoRead All Registers checkbox is checked (see Figure 1), the new input register value is updated to the software's main window.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5591 Evaluation Kit/Evaluation System

Figure 1. Main Window of the MAX5591 Evaluation Software

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX5591 Evaluation Kit/Evaluation System

Table 1. Main Window Control Descriptions of the MAX5591 EV Kit Software

| CONTROL   | DESCRIPTION                                               |
|-----------|-----------------------------------------------------------|
|           | Allows the user to select the active tab.                 |
|           | Shows the CMOD232 debugging tools.                        |
|           | Gives access to the help file and the about box.          |
|           | Shows the shutdown mode and shutdown status of DACA-DACH. |

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5591 Evaluation Kit/Evaluation System

Table 1. Main Window Control Descriptions of the MAX5591 EV Kit Software (continued)

<!-- image -->

Figure 2. Load Input (From Shift) Tab

<!-- image -->

The Load Input and Output (From Shift) tab, shown in Figure 3, allows the user to load the input and output registers of the corresponding DAC with the data that is sent to the shift register. The user can load all four DACs at once by pressing the Load All DACs button. If the AutoRead All Registers checkbox is checked (see Figure 1), the new input and output register values are updated to the software's main window.

<!-- image -->

The Load Output (From Input) tab, shown in Figure 4, allows the user to load the output register of the corresponding DAC with the data that is present in the corresponding input register. The user can load the four DACs simultaneously in any combination by checking the appropriate DAC \_ checkbox and then pressing the Load Checked DACs button. It is also possible to load all of the DACs at once by pressing the Load All DACs button. If the AutoRead All Registers checkbox is checked (see Figure 1), the new output register values are updated to the software's main window.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5591 Evaluation Kit/Evaluation System

Figure 4. Load Output (From Input) Tab

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5591 Evaluation Kit/Evaluation System

Figure 5. Shutdown Modes Tab

<!-- image -->

The Shutdown Modes tab,  shown in Figure 5, allows the user to select the appropriate DAC shutdown mode individually for all eight DACs. The selected shutdown modes will not be loaded until the Load DAC A-H Shutdown Modes button is pressed. In addition, the user can select the appropriate DAC shutdown state individually for all eight DACs. The selected shutdown states will not be loaded until the Load DAC A-H Shutdown States button is pressed. If the AutoRead All Registers checkbox is checked (see Figure 1), the new shutdown status for each DAC is updated to the software's main window.

The UPIO Functions tab, shown in Figure 6, allows the user to select the appropriate UPIO1 and UPIO2 functions using the corresponding combo box. The current UPIO1 and UPIO2 function status is displayed by pressing the Read button.

Note: For the MAX5591 EV kit software to read from the MAX5591 device, UPIO1 must be configured for DOUTRB.

The Settling Time Modes tab, shown in Figure 7, allows the user to select the appropriate DAC settling time mode individually for all eight DACs. The selected settling-time  modes will not be loaded until the Load DAC A-H Settling Time Modes button is pressed. If the AutoRead All Registers checkbox is checked (see Figure 1), the new settling time modes for each DAC are updated to the software's main window.

<!-- image -->

The Read UPIO Inputs tab, shown in Figure 8, allows the user to read the GPI status for UPIO2. Pressing the Read button tells the user whether a falling edge or rising  edge has occurred since the last read as well as the current state of the pin.

Note: This read requires that UPIO1 be configured for DOUTRB and UPIO2 as a GPI.

## Detailed Description of Hardware

## MAX5591EVCMOD2 EV System

The MAX5591EVCMOD2 is a complete 8-channel, 12-bit data-generation system consisting of a MAX5591 EV kit and the Maxim CMOD232 command module.

## CMOD232 Command Module

The CMOD232 uses a proprietary design to provide SPI- and I 2 C-compatible interfaces to communicate with various Maxim devices. Maxim reserves the right to change the implementation of this module at any time with no advance notice. The CMOD232 board uses a MAX1659 linear regulator and a MAX3232E level shifter.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5591 Evaluation Kit/Evaluation System

Figure 7. Settling Time Modes Tab

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5591 Evaluation Kit/Evaluation System

Figure 8. Read UPIO Tab

<!-- image -->

## CMOD232 Power Supply

The CMOD232 board uses a MAX1659 linear voltage regulator. Jumper J1 selects between the MAX1659's 5V preset output voltage and a 3.3V output voltage. The included plug-in transformer (Digi-Key T402-P5P-ND) provides 9VDC at 200mA from a 120V AC line. Other DC power supplies can be used. The power connector accepts a 2.1mm barrel connector and DC power in either polarity. (AC input is not tested or recommended.)

## MAX5591 EV Kit

The MAX5591 EV kit board provides a proven layout for evaluating the MAX5591 8-channel, 12-bit DAC and can be obtained separately without the CMOD232 command module. The MAX5591 EV kit contains an on-board refer-

## Table 2. CMOD232 Jumper J1 (System DVDD Voltage)

| SHUNT POSITION   | DV DD VOLTAGE (V)                                             |
|------------------|---------------------------------------------------------------|
| 1-2              | 3.3                                                           |
| 2-3*             | 5.0                                                           |
| Open             | DO NOT OPERATE KIT WITH J1 OPEN! PERMANENT DAMAGE WILL OCCUR. |

<!-- image -->

ence and two momentary pushbutton switches for testing the UPIO functions. The MAX5591AEUI (U1) is powered from two sources. The user must supply +5V to AVDD. DVDD is provided by the CMOD232 command module.

The DAC outputs can be set to full scale, midscale or zero at power-up. Jumper JU1 configures the DAC outputs at power-up as shown in Table 3.

Jumper JU2 gives the user the flexibility to connect UPIO1 to the CMOD232 command module's SPI MISO line  (DOUT) or to a UPIO1 user pad on the MAX5591 EV kit board. Table 4 shows the UPIO1 route selection.

Table 3. Power-Up State Input (PU)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU1      | 1-2              | DAC outputs set to full scale upon power-up. |
| JU1      | 2-3*             | DAC outputs set to zero upon power-up.       |
| JU1      | Open             | DAC outputs set to midscale upon power-up.   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5591 Evaluation Kit/Evaluation System

## Table 4. UPIO1 Route Selection (DOUT/UPIO1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                            |
|----------|------------------|------------------------------------------------------------------------|
| JU2      | 1-2 2-3*         | UPIO1 user pad. CMOD232's SPI MISO line Required for readback commands |

## Table 5. Reference Selection (REF)

| JUMPER   | PC BOARD TRACE   | DESCRIPTION                                                |
|----------|------------------|------------------------------------------------------------|
| JU3      | Short*           | On-board MAX6126 +2.5V reference option.                   |
| JU3      | Open             | Cut trace and attach an external reference to the REF pad. |

## Table 6. Supply-Current Measurement (IAVDD/IDVDD)

| JUMPER   | PC BOARD TRACE   | DESCRIPTION                                                                                                                                                 |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU4/JU5  | Short* Open      | Normal operation. Cut traces and attach a current meter in series with the two open terminals to measure the supply current of AV DD (JU4) and DV DD (JU5). |

## Table 7. Data Latch-In Clock Edge Select (DSP)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU6      | 1-2*             | Data latched in on the rising edge of SCLK.  |
| JU6      | 2-3              | Data latched in on the falling edge of SCLK. |

The MAX5591 EV kit has an on-board MAX6126 +2.5V reference, but also allows for a user-supplied external reference (0.25V to AVDD). Cut the PC board trace designated by jumper JU3 and apply an external reference to the REF pad. Table 5 shows the jumper JU3 reference type options.

Measure supply current using jumpers JU4 and JU5. Cut the PC board traces and place a current meter in series with the two terminals of the corresponding jumper. Table 6 shows the jumper JU4/JU5 currentmeasurement options.

Jumper JU6 allows the user to select the clock edge that latches in the SPI data. Table 7 shows the jumper JU6 clock edge options.

## General Troubleshooting

Problem 1: CMOD232 module hardware not found (see Figure 9).

Figure 9. EV Kit Software Warning Message

<!-- image -->

## Solution 1:

- Verify that the power LED is lit.
- Verify that the 2.1mm power cable is connected.
- Verify  that  the  DB9  serial  communications cable is connected.
- Verify that another application, such as PDA desktop software, is not using the com port.

Problem 2: The register data at the bottom of the MAX5591 evaluation software's main window is not correct (see Figure 1).

## Solution 2:

- Verify that UPIO1 is configured for DOUTRB.
- Verify that the AutoRead All Registers checkbox is checked.
- Verify that the shunt for jumper JU6 is connected to pins 1-2.
- Verify that the shunt for jumper JU2 is connected to pins 2-3.
- Verify  that  the  DB9  serial  communications cable is connected.

Problem 3: Pressing the Read button in the Read UPIO Inputs tab gives incorrect status (see Figure 8).

## Solution 3:

- Verify that UPIO2 is configured as a GPI.
- Verify that UPIO1 is configured for DOUTRB.
- Verify that the shunt for jumper JU6 is connected to pins 1-2.
- Verify that the shunt for jumper JU2 is connected to pins 2-3.
- Verify  that  the  DB9  serial  communications cable is connected.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5591 Evaluation Kit/Evaluation System

<!-- image -->

Figure 10. MAX5591 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5591 Evaluation Kit/Evaluation System

<!-- image -->

Figure 11. MAX5591EV Kit Component Placement GuideComponent Side

Figure 12. MAX5591 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 13. MAX5591 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12