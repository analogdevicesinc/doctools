<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5581 Evaluation Kit/Evaluation System

## General Description

The MAX5581 evaluation system (EV system) is a complete,  4-channel, 12-bit, data-generation system. The MAX5581 EV system (MAX5581EVCMODU) consists of a MAX5581 evaluation kit (EV kit) and the Maxim CMODUSB command module. Order the EV kit (MAX5581EVKIT) separately if an SPI™ master or the CMODUSB command module is already available.

The EV kit comes with the MAX5581AETP installed. Contact the factory for free samples of the pin-compatible MAX5580\_ETP-MAX5585ETP to evaluate these devices.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                       |
|--------------------|-------|-------------------------------------------------------------------|
| C1, C4             |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M  |
| C2, C3, C5, C6, C7 |     5 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104KT |
| FB1                |     1 | Surface-mount ferrite bead (0603) TDK MMZ1608B601C                |
| J1                 |     1 | 2 x 20 right-angle female connector                               |
| J2                 |     1 | 10-pin, 2 x 5 header                                              |
| JU1, JU2, JU6      |     3 | 3-pin headers                                                     |
| JU3, JU4, JU5      |     0 | Not installed (2-pin headers)                                     |
| R1-R8              |     8 | 10k Ω ±0.1% resistors (0805)                                      |
| R9-R16             |     0 | Not installed (thru-hole resistors)                               |
| R17, R19           |     2 | 100k Ω ±5% resistors (0805)                                       |
| R18, R20           |     2 | 1k Ω ±5% resistors (0805)                                         |
| R21                |     1 | 10k Ω ±5% resistor (0805)                                         |
| SW1, SW2           |     2 | Pushbutton switches, momentary, normally open                     |
| U1                 |     1 | MAX5581AETP (20-pin thin QFN-EP)                                  |
| U2                 |     1 | +2.5V voltage reference (8-pin SO) Maxim MAX6126AASA25            |
| None               |     3 | Shunts                                                            |
| None               |     1 | MAX5581 EV kit blank PC board                                     |
| None               |     1 | MAX5581 EV kit software CD                                        |

SPI is a trademark of Motorola, Inc. Windows is a registered trademark of Microsoft Corporation.

- ♦ Proven PC Board Layout
- ♦ Windows ® 98-/2000-/XP-Compatible Evaluation Software
- ♦ Pushbutton Switches for Easy UPIO\_ Evaluation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | INTERFACE TYPE           |
|----------------|--------------------------|
| MAX5581EVKIT   | User-supplied SPI master |
| MAX5581EVCMODU | Windows software         |

Note: The MAX5581 software is included with the MAX5581 EV kit but is designed for use with the complete EV system. The EV system includes both the Maxim command module and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim command module.

Note: To evaluate the MAX5580\_ETP-MAX5585ETP, request a free sample when ordering the MAX5581 EV kit.

## MAX5581EVCMODU Component List

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX5581EVKIT |     1 | MAX5581 EV kit         |
| CMODUSB      |     1 | CMODUSB command module |

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MAX5581 when contacting this component supplier.

## MAX5581EV Kit Files

| INSTALL.EXE   | Installs the EV kit files on your computer   |
|---------------|----------------------------------------------|
| MAX5581.EXE   | Application program                          |
| HELPFILE.HTM  | MAX5581 EV kit help file                     |
| FTD2XX.INF    | USB driver file                              |
| UNINST.INI    | Uninstalls the EV kit software               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

Features

## MAX5581 Evaluation Kit/Evaluation System

## Quick Start

## Recommended Equipment

- MAX5581EVCMODU EV system (MAX5581EVKIT and  CMODUSB  command  module  with  USB cable included)
- Power supply: 5V at 100mA (AVDD)
- Digital voltmeter (DVM)
- A user-supplied Windows 98/2000/XP PC with an available USB port

## Procedure Do not turn on the power until all connections are made.

- 1) Verify jumper J1 on the CMODUSB module is connected to pins 1-2. This sets the logic supply to 5V.
- 2) Verify that JU1 on the MAX5581 EV kit is set to 2-3 (DAC outputs are set to zero on power-up).
- 3) Verify that JU2 on the MAX5581 EV kit is set to 2-3 (UPIO1 connected to SPI MISO (DOUT) line).
- 4) Verify that JU6 on the MAX5581 EV kit is set to 1-2 (SPI data is clocked in on the rising edge of SCLK).
- 5) Connect the MAX5581 EV kit's 40-pin female connector (J1) to the CMODUSB module's 40-pin male connector (P4).
- 6) Install  the  MAX5581 evaluation software on your computer by running the INSTALL.EXE program on the installation CD-ROM. The program files are copied and icons are created for them in the Windows Start menu.
- 7) Connect  the  5V  power  supply  between  the MAX5581 EV kit's AVDD and AGND pads. Turn on the 5V power supply.
- 8) Connect the included USB cable from the PC to the CMODUSB command module. A Building Driver Database window will pop up in addition to a New Hardware Found message. If you do not see any window that is similar to the one described above after  30s,  try  removing the USB cable from the CMODUSB command module and reconnect it again. Administrator privileges are required to install the USB device driver on Windows 2000/XP.
- 9) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Max5581 using the Browse button.
- 10) Start  the  MAX5581 EV kit software by opening its icon in the Start menu.
- 11) Using the Load Input and Output (From Shift) Tab, press the Load All DACs button.
- 12) Verify  that  all Output Register Code and Voltage labels update with 0x800 and 1.25V, respectively, at the bottom of the MAX5581 EV kit software's main window.
- 13) Measure the voltage at OUTA (J2-1) using the DVM and verify that the voltage is approximately 1.25V.

## Detailed Description of Software

The evaluation software's main window, shown in Figure 1, displays the voltage and code for all DAC input and output registers. In addition, the main window also shows the shutdown and settling time status for all of the DACs. Table 1 describes the controls that are always present on the evaluation software's main window.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5581 Evaluation Kit/Evaluation System

Figure 1. MAX5581 Evaluation Software-Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX5581 Evaluation Kit/Evaluation System

## Table 1. MAX5581 EV Kit Software-Main Window Control Descriptions

| CONTROL   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | Allows the user to select the active tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|           | Shows the CMODUSB debugging tools.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|           | Gives access to the help file and the about box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|           | Shows the code and voltage for the input register of DAC A-DAC D.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|           | Shows the code and voltage for the output register of DAC A-DAC D.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|           | Shows the shutdown mode and shutdown status of DAC A-DAC D.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|           | Shows the settling time mode of DAC A-DAC D.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|           | When checked, automatically reads and updates all the register information for the registers that are permanently on the bottom of the software's main window. A flashing asterisk indicates AutoRead All Registers is active.                                                                                                                                                                                                                                                                                                                               |
|           | Allows the user to enter the actual measured on-board reference value or the actual value of a user- supplied external reference. Pressing the Set Vref button uses the value typed in the edit to calculate the corresponding input and output register voltages.                                                                                                                                                                                                                                                                                           |
|           | Allows the user to enter the gain of the output amplifier. Pressing the Set Gain button uses the value typed in the edit box to calculate the corresponding input and output register voltages. The MAX5581 EV kit board has on-board resistors that set the default gain to 2. To change the gain, modify the on- board gain-setting resistors by referring to the MAX5581 data sheet before changing the gain in the software. For unity-gain device evaluation, set the gain to 1 and remove the output feedback resistors to prevent loading the output. |
|           | Resets all the registers and status information that is permanently on the bottom of the software's main window as shown in Figure 1.                                                                                                                                                                                                                                                                                                                                                                                                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5581 Evaluation Kit/Evaluation System

Figure 2. Load Input (From Shift) Tab

<!-- image -->

The Load Input (From Shift) tab,  shown in Figure 2, allows the user to load the input register of the corresponding DAC with the data that is sent to the shift register. The user can load all four DACs individually or all at  once by pressing the appropriate button. If the AutoRead All Registers checkbox is checked (see Figure 1), the new input register value is updated to the software's main window.

The Load Output (From Shift) tab, shown in Figure 3, allows the user to load the output register of the corresponding DAC with the data that is sent to the shift register.  The  user  can  load  all  four  DACs  individually  by pressing the appropriate button. If the AutoRead All Registers checkbox is checked (see Figure 1), the new output register value is updated to the software's main window.

<!-- image -->

Figure 3. Load Output (From Shift) Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5581 Evaluation Kit/Evaluation System

The Load Input and Output (From Shift) tab, shown in Figure 4, allows the user to load the input and output registers of the corresponding DAC with the data that is sent to the shift register. The user can load all four DACs individually or all at once by pressing the appropriate button. If the AutoRead All Registers checkbox is checked (see Figure 1), the new input and output register values are updated to the software's main window.

Figure 4. Load Input and Output (From Shift) Tab

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5581 Evaluation Kit/Evaluation System

The Load Output (From Input) tab, shown in Figure 5, allows the user to load the output register of the corresponding DAC with the data that is present in the corresponding input register. The user can load the four DACs simultaneously in any combination by checking the appropriate DAC\_ checkbox and then pressing the Load Checked DACs button. It is also possible to load all of the DACs at once by pressing the Load All DACs button. If the AutoRead All Registers checkbox is checked (see Figure 1), the new output register values are updated to the software's main window.

<!-- image -->

Figure 5. Load Output (From Input) Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5581 Evaluation Kit/Evaluation System

The Shutdown Modes tab,  shown in Figure 6, allows the user to select the appropriate DAC shutdown mode individually  for  all  four  DACs.  The  selected  shutdown modes are not loaded until the Load DAC A-D

Shutdown Modes button is pressed. If the AutoRead All Registers checkbox is checked (see Figure 1), the new shutdown mode status for each DAC is updated to the software's main window.

Figure 6. Shutdown Modes Tab

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5581 Evaluation Kit/Evaluation System

The UPIO Functions tab, shown in Figure 7, allows the user to select the appropriate UPIO1 and UPIO2 functions  using  the  corresponding combobox. The current UPIO1 and UPIO2 function status is displayed by pressing the Read button.

Note: For the MAX5581 EV kit software to read from the MAX5581 device, UPIO1 must be configured for DOUTRB.

<!-- image -->

Figure 7. UPIO Functions Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5581 Evaluation Kit/Evaluation System

The Settling Time Modes tab, shown in Figure 8, allows the user to select the appropriate DAC settling time mode individually for all four DACs. The selected settling time modes are not loaded until the Load DAC

A-D Settling Time Modes button is pressed. If the AutoRead All Registers checkbox is checked (see Figure 1), the new settling time modes for each DAC are updated to the software's main window.

Figure 8. Settling Time Modes Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5581 Evaluation Kit/Evaluation System

The Read UPIO Inputs tab, shown in Figure 9, allows the user to read the GPI status for UPIO2. Pressing the Read button not only tells the user whether a falling edge or rising edge has occurred since the last read, but also the current state of the pin.

Note: This read requires that UPIO1 be configured for DOUTRB and UPIO2 be configured as a GPI.

Figure 9. Read GPI Tab

<!-- image -->

## Detailed Description of Hardware

## MAX5581 EV System

The MAX5581 EV system is a complete, 4-channel, 12bit,  data-generation system consisting of a MAX5581 EV kit and the Maxim CMODUSB command module.

## CMODUSB Command Module

The CMODUSB uses a proprietary design to provide SPI- and I 2 C-compatible interfaces to demonstrate various Maxim devices. Maxim reserves the right to change the implementation of this module at any time with no advance notice.

## CMODUSB Power Supply

The CMODUSB board uses a MAX1658 linear voltage regulator. Jumper J1 selects between a 5V or 3.3V system supply voltage. Do not plug a wall cube into the P1 power jack since power is provided from the USB port.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 2. CMODUSB Jumper J1 (System Supply Voltage)

| JUMPER   | SHUNT POSITION   | SYSTEM SUPPLY VOLTAGE (DVDD)                                   |
|----------|------------------|----------------------------------------------------------------|
| J1       | 1-2              | 5V                                                             |
| J1       | 2-3              | 3.3V                                                           |
| J1       | Open             | DO NOT OPERATE KIT WITH J1 OPEN. PERMANENT DAMAGE WILL RESULT. |

## MAX5581 Evaluation Kit/Evaluation System

## MAX5581 EV Kit

The MAX5581 EV kit board provides a proven layout for evaluating the MAX5581 4-channel, 12-bit DAC and can be obtained separately without the CMODUSB command module. The MAX5581 EV kit contains an onboard reference and two momentary pushbutton switches  for  testing  the  UPIO  functions.  The MAX5581AETP (U1) is powered from two sources. The user must supply +5V to AVDD. DVDD is provided by the CMODUSB command module.

The DAC outputs can be set to full scale, midscale, or zero at power-up. Jumper JU1 configures the DAC outputs at power-up as shown in Table 3.

Jumper JU2 gives the user the flexibility to connect UPIO1 to the CMODUSB command module's SPI MISO line  (DOUT) or to a UPIO1 user pad on the MAX5581 EV kit board. Table 4 shows the UPIO1 route selection.

Table 3. Power-Up State Select Input (PU)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU1      | 1-2              | DAC outputs set to full scale upon power-up. |
| JU1      | 2-3*             | DAC outputs set to zero upon power-up.       |
| JU1      | Open             | DAC outputs set to midscale upon power-up.   |

* Default configuration.

## Table 4. UPIO1 Route Selection (DOUT/UPIO1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU2      | 1-2 2-3*         | UPIO1 user pad. CMODUSB's SPI MISO (DOUT). Required for readback |

* Default configuration.

Table 5. Reference Selection (REF)

| JUMPER   | PC BOARD TRACE   | DESCRIPTION                                                    |
|----------|------------------|----------------------------------------------------------------|
| JU3      | Short*           | On-board MAX6126 +2.5V reference option.                       |
| JU3      | Open             | Cut the trace and attach an external reference to the REF pad. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The MAX5581 EV kit has an on-board MAX6126 +2.5V reference, but also allows for a user-supplied external reference (0.25V to AVDD). Cut the PC board trace designated by jumper JU3 and apply an external reference to the REF pad. Table 5 shows the jumper JU3 reference type options.

Measure the supply current using jumpers JU4 and JU5. Cut the PC board traces and place a current meter in series with the two terminals of the corresponding jumper. Table 6 shows the jumper JU4/JU5 current measurement options.

Jumper JU6 allows the user to select the clock edge that latches-in the SPI data. Table 7 shows the jumper JU6 clock edge options.

Table 6. Supply Current Measurement (IAVDD/IDVDD)

| JUMPER   | PC BOARD TRACE   | DESCRIPTION                                                                                                                                |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| JU4/JU5  | Short*           | Normal operation.                                                                                                                          |
| JU4/JU5  | Open             | Cut the trace and attach a current meter in series with the two open terminals to measure the supply current of AVDD (JU4) and DVDD (JU5). |

Table 7. Data Latch-In Clock Edge Select ( DSP )

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU6      | 1-2*             | Data latched in on the rising edge of SCLK.  |
| JU6      | 2-3              | Data latched in on the falling edge of SCLK. |

<!-- image -->

## MAX5581 Evaluation Kit/Evaluation System

## General Troubleshooting

Problem 1: CMODUSB module hardware not found (see Figure 10).

Figure 10. EV Kit Software Warning Message

<!-- image -->

## Solution 1:

- Verify that the power LED is lit.
- Verify that the USB cable is connected.

Problem 2: The register data at the bottom of the MAX5581 evaluation software's main window is not correct (see Figure 1).

<!-- image -->

## Solution 2:

- Verify that UPIO1 is configured for DOUTRB.
- Verify that the AutoRead All Registers checkbox is checked.
- Verify that the shunt for jumper JU6 is connected to pins 1-2.
- Verify that the shunt for jumper JU2 is connected to pins 2-3.
- Verify that the USB cable is connected.

Problem 3: Pressing the Read button in the Read UPIO Inputs tab gives incorrect status (see Figure 7).

## Solution 3:

- Verify that UPIO2 is configured as a GPI.
- Verify that UPIO1 is configured for DOUTRB.
- Verify that the shunt for jumper JU6 is connected to pins 1-2.
- Verify that the shunt for jumper JU2 is connected to pins 2-3.
- Verify that the USB cable is connected.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5581 Evaluation Kit/Evaluation System

Figure 11. MAX5581 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5581 Evaluation Kit/Evaluation System

<!-- image -->

Figure 12. MAX5581 EV Kit Component Placement GuideComponent Side

Figure 13. MAX5581 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 14. MAX5581 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.