<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX17088 Evaluation Kit/ Evaluation System

## General Description

The MAX17088 evaluation system (EV system) consists of the MAX17088 evaluation kit (EV kit) and the Maxim CMAXQUSB command module. Windows ® 2000/XP ® - and Windows Vista ® -compatible software is also available for use with the EV system (MAX17088EVCMAXQU+) and can be downloaded from www.maxim-ic.com/evkitsoftware .

The MAX17088 EV kit (MAX17088EVKIT+) is a fully assembled and tested surface-mount PCB that provides the features required for active-matrix, thin-film transistor  (TFT)  liquid-crystal  displays  (LCDs).  The  EV kit contains a step-up switching regulator, positive twostage charge pump, negative two-stage charge pump, digitally  adjustable  VCOM calibration device with nonvolatile  memory, SMBus™-compatible interface, highspeed operational amplifier (op amp), and high-voltage, level-shifting scan driver for TFT-LCD applications.

The MAX17088 EV kit operates from a DC supply voltage from +1.8V to +6V. The step-up switching regulator is configured for a +8V output providing at least 300mA from a +2.2V input. The positive charge pump is configured for a +21V output providing at least 20mA. The negative charge pump is configured for a -13V output providing at least 20mA. The op amp is capable of providing up to ±150mA peak and features a programmable output voltage initially configured for +3.2V. The high-voltage level-shifting scan driver buffers inputs from STV, CPV, and OE pads and shifts them to a desired level to drive TFT-LCD row logic.

The MAX17088 EV kit demonstrates low quiescent current  and  high  efficiency  (&gt;  85%)  for  maximum  battery time per charge. Operation at 1.2MHz allows the use of tiny surface-mount components. The MAX17088 36-pin thin QFN package (0.8mm max height), with low-profile external components, allow this circuit to be less than 1.5mm high.

The Maxim CMAXQUSB command module provides the SMBus-compatible interface and is connected to a PC through the universal serial bus (USB) port. The MAX17088 EV kit software provides a graphical user interface (GUI) for exercising the MAX17088 features.

The MAX17088 is the successor to the MAX8798.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

SMBus is a trademark of Intel Corp.

- ♦ +1.8V to +6V Input Range
- ♦ Output Voltages
- +8V Output at 300mA (+2.2V Input Step-Up Switching Regulator)
- +21V Output at 20mA (Positive Charge Pump)
- -13V Output at 20mA (Negative Charge Pump)
- ±150mA High-Current Op-Amp Output
- ♦ Resistor-Adjustable Switching Regulator and Op-Amp Output Range
- ♦ Digitally Programmable Op-Amp Output Voltage
- ♦ +35V to -25V High-Voltage Level-Shifting Drivers
- ♦ &gt; 85% Efficiency (Step-Up Switching Regulator)
- ♦ 1.2MHz Step-Up Switching Frequency
- ♦ SMBus-Compatible Interface
- ♦ Windows 2000/XP- and Windows Vista (32-Bit)-Compatible Software
- ♦ 1.5mm Low-Profile Surface-Mount Components
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART               | TYPE      |
|--------------------|-----------|
| MAX17088EVKIT +    | EV Kit    |
| MAX17088EVCMAXQU + | EV System |

+Denotes lead(Pb)-free and RoHS compliant.

Note: The Maxim command module (CMAXQUSB) is required when using the MAX17088 EV kit software.

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                                             |
|------------------------|-------|-----------------------------------------------------------------------------------------|
| C1                     |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J106M                         |
| C2, C18, C19, C20, C24 |     0 | Not installed, ceramic capacitors (0603)                                                |
| C3                     |     1 | 68pF±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H680J TDK C1608C0G1H680J      |
| C4                     |     1 | 0.047µF ±10%, 50V X5R ceramic capacitor (0603) Murata GRM188R71H473K TDK C1608X7R1H473K |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

Features

## MAX17088 Evaluation Kit/ Evaluation System

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                          |
|---------------|-------|----------------------------------------------------------------------------------------------------------------------|
| C5            |     1 | 0.22µF ±20%, 16V X5R ceramic capacitor (0603) TDK C1608X5R1C224M                                                     |
| C6, C7        |     2 | 1µF ±20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105M                                                       |
| C8-C16        |     9 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K                                                     |
| C17           |     0 | Not installed, electrolytic capacitor (6.3mm x 5mm)                                                                  |
| C21, C22      |     2 | 4.7µF ±10%, 16V X5R ceramic capacitors (1206) Murata GRM319R61C475kA88D TDK C3216X5R1C475K                           |
| C23           |     0 | Not installed, ceramic capacitor (1206)                                                                              |
| D1            |     1 | 1A, 30V Schottky diode (S-Flat) Central Semi CMMSH1-40 Nihon EP10QY03 Toshiba CRS02(TE85L)                           |
| D2-D5         |     4 | 200mA, 100V dual diodes (SOT23) Fairchild MMBD4148SE (Top Mark: D4) Central Semi CMPD7000, lead free (Top Mark: C5C) |
| J1            |     1 | Dual-row (2 x 10) right-angle receptacle                                                                             |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                          |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1, JU2      |     2 | 2-pin headers                                                                                                                                        |
| L1            |     1 | Low-profile 4.7µH, 1.7A inductor (1.5mm max height) Würth S07100060 or low-profile 5.1µH, 1.5A inductor (1.5mm max height) Sumida CDRH5D14HPNP-5R1NC |
| OECON         |     0 | Not installed, test point                                                                                                                            |
| R1, R6, R7    |     3 | 200k Ω ±1% resistors (0603)                                                                                                                          |
| R2            |     1 | 36.5k Ω ±1% resistor (0603)                                                                                                                          |
| R3            |     1 | 100k Ω ±1% resistor (0603)                                                                                                                           |
| R4            |     1 | 10 Ω ±5% resistor (0603)                                                                                                                             |
| R5, R15       |     2 | 100k Ω ±5% resistors (0603)                                                                                                                          |
| R8            |     1 | 24.9k Ω ±1% resistor (0805)                                                                                                                          |
| R9            |     1 | 20k Ω ±5% resistor (0603)                                                                                                                            |
| R10, R11      |     2 | 200 Ω ±5% resistors (0603)                                                                                                                           |
| R12, R13, R14 |     3 | 10k Ω ±5% resistors (0603)                                                                                                                           |
| R16           |     0 | Not installed, resistor-short (PC trace) (0603)                                                                                                      |
| U1            |     1 | Internal-switch boost regulator (36 TQFN-EP*) Maxim MAX17088ETX+                                                                                     |
| -             |     2 | Shunts                                                                                                                                               |
| -             |     1 | PCB: MAX17088 EVALUATION KIT+                                                                                                                        |

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE                     |
|---------------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.                 | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                     | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc.      | 770-436-1300 | www.murata-northamerica.com |
| Nihon Inter Electronics Corp.               | 847-843-7500 | www.niec.co.jp              |
| Sumida Corp.                                | 847-545-6700 | www.sumida.com              |
| TDK Corp.                                   | 847-803-6100 | www.component.tdk.com       |
| Toshiba America Electronic Components, Inc. | 949-623-2900 | www.toshiba.com/taec        |
| Würth Electronik GmbH & Co. KG              | 201-785-8800 | www.we-online.com           |

Note: Indicate that you are using the MAX17088 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17088 Evaluation Kit/ Evaluation System

## MAX17088 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX17088.EXE            | Application program                        |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

## Quick Start

## Recommended Equipment

- +1.8V to +6V, 2A DC power supply for PIN pad
- MAX17088 EV system MAX17088 EV kit CMAXQUSB command module (USB cable included)
- User-supplied Windows 2000/XP or Windows Vista PC with a spare USB port
- Voltmeter

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Hardware Procedure

The MAX17088 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed across jumper JU1.
- 2) Verify that a shunt is not installed across jumper JU2.
- 3) Connect the positive terminal of the power supply to the PIN pad. Connect the negative terminal of the power supply to the GND pad closest to PIN.
- 4) Turn on the power supply and verify that the stepup switching regulator output (MAIN) is +8V.
- 5) Verify  that  the  gate-on  supply  (GON) is approximately +21V.
- 6) Verify  that  the  gate-off  supply  (GOFF)  is  approximately -13V.
- 7) Verify  that  the  output  of  the  high-speed  op  amp (VCOM) is approximately +3.2V.

<!-- image -->

For instructions on selecting the step-up switching regulator feedback and op-amp divider resistors for other output voltages, see the Output-Voltage Selection section.

## Software Procedure

With the EV kit powered on, perform the following steps to verify software operation:

- 1) On the CMAXQUSB command module, ensure that the shunt on jumper JU1 is in the +3.3V position.
- 2) To enable the MAX17088, ensure that a shunt is installed on jumper JU1 of the MAX17088 EV kit.
- 3) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the MAX17088 EV kit software, MAX17088Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 4) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 5) Carefully connect the boards by aligning the MAX17088 EV kit's 20-pin connector (J1) with the CMAXQUSB board's 20-pin connector (P3). Gently press them together. The two boards should be flush against each other.
- 6) Connect  the  USB  cable  from  the  PC  to  the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message when installing the USB driver for the first time. If you do not see a window that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000/XP/Vista.
- 7) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX17088 (default installation directory) using the Browse button. During device driver installation, Windows may show a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition and it is safe to proceed with installation.  Refer to the TROUBLESHOOTING\_USB.PDF document included with the software for additional information.
- 8) Start the MAX17088 EV kit software by opening its icon in the Start | Programs menu.
- 9) Normal device operation is verified when MAX17088 connected is  displayed in the status bar on the MAX17088 EV kit main window (Figure 1).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17088 Evaluation Kit/ Evaluation System

Figure 1. MAX17088 EV Kit Software Main Window

<!-- image -->

## Detailed Description of Hardware

The MAX17088 EV kit contains a step-up switching regulator,  positive  two-stage  charge  pump, negative twostage charge pump, digitally adjustable VCOM calibration  device  with  nonvolatile  memory, SMBus-compatible interface, high-speed operational amplifier (op amp), and high-voltage level-shifting scan driver for TFT-LCD applications. The EV kit operates from a single DC power supply between +1.8V and +6V that provides at least 2A.

As configured, the step-up switching regulator (MAIN) generates a +8V output and provides at least 200mA from a +1.8V input. It also provides at least 300mA from a +2.2V input and 600mA from a +4.5V input. The stepup switching-regulator output voltage can be adjusted up to +18V with different feedback resistors (see the Output-Voltage Selection section).

The GON consists of two positive charge-pump stages to  generate approximately +21V and provides greater than 20mA. The GOFF consists of two negative chargepump stages to generate approximately -13V and provides greater than 20mA. Loading GON and GOFF reduces the available MAIN current proportionally.

The op-amp output (VCOM) is SMBus programmable and is configured for an output-voltage range of +2.4V to  +4V.  VCOM can source or sink peak current up to 150mA. The output-voltage range can be reconfigured to  other  voltages  with  voltage-divider  resistors  R6  and R7. Refer to the Setting the VCOM Adjustment Range section in the MAX17088 IC data sheet for more details.

The MAX17088 includes a 3-channel, high-voltage level-shifting  driver  for  driving  row-driver  functions  on the  panel  glass.  CKV,  CKVB, and STVP pads are the outputs of the driver. The outputs swing between GON and GOFF according to the input logic levels on the STV, CPV, and OE pads and the IC's internal logic. Refer to the High-Voltage Level-Shifting Scan Driver section in the MAX17088 IC data sheet for more details.

## Jumper Selection (JU1, JU2)

The MAX17088 EV kit incorporates jumper JU1 to enable/disable the IC outputs and jumper JU2 to enable/disable write protection. When write protection is  enabled,  all  SMBus commands are ignored by the device. This prevents device detection and changing of the VCOM calibrator settings. See Table 1 for jumper JU1 functions and Table 2 for jumper JU2 functions.

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   | SHDN PIN                         | EV KIT OUTPUTS                |
|------------------|----------------------------------|-------------------------------|
| Installed*       | SHDN connected to PIN            | Outputs enabled (MAIN = +8V)  |
| Not installed    | SHDN connected to GND through R5 | Outputs disabled (MAIN ≈ PIN) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17088 Evaluation Kit/ Evaluation System

Table 2. Jumper JU2 Functions

| SHUNT POSITION   | WPN PIN                          | VCOM CALIBRATOR WRITE PROTECTION   |
|------------------|----------------------------------|------------------------------------|
| Installed        | WPN connected to GND             | Enabled                            |
| Not installed*   | WPN connected to VDD through R15 | Disabled                           |

## Loading 7-Bit DAC Setting

The DAC setting corresponds to a certain sink-current level,  which  in  turn  corresponds  to  a  specific  VCOM voltage. With the MAX17088 EV kit software, the device's 7-bit internal DAC is configured by entering an appropriate DAC setting into the DAC edit  box.  The DAC setting can be set from 0x00 (VCOMMAX) to 0x7F (VCOMMIN). The DAC setting is written to the device by pressing the Load DAC button (Figure 1).

## Reading 7-Bit DAC

The MAX17088 7-bit DAC is read by either pressing the Read DAC button or by checking the DAC polling checkbox. When checked, the software continuously reads and displays the DAC's current setting.

## Programming MTP

The current DAC setting can be programmed into the device's internal MTP by entering an appropriate DAC setting into the DAC edit box and pressing the Program button. Pressing the Program button also loads the current setting into the DAC. Each time the device is powered on, the DAC is loaded with the setting  stored  in  the  device's  MTP.  Programming is only possible when GON is greater than +16V.

## Simple SMBus Commands

There are two methods for communicating with the MAX17088, through the MAX17088 EV kit software main window (Figure 1), or through the interface window available by selecting the Options | Interface menu item from the menu bar. The Maxim command module interface window (Figure 2) includes a 2-wire interface tab  that  allows  for  execution  of  the SMBusSendByte() , SMBusReceiveByte() ,  and SMBusQuick() commands. See Table 3 for details regarding SMBus commands. The Command byte combo box accepts numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 2 for an illustration of this tool.

## Output-Voltage Selection

The MAX17088 EV kit's step-up switching-regulator output (MAIN) is set to +8V by feedback resistors R1 and R2. To generate output voltages other than +8V (up to +18V), select different external voltage-divider resistors, R1 and R2.

Note that changing the MAIN voltage setting changes the GON and GOFF charge-pump output voltages. The voltage range on GOFF is limited to -25V and the voltage range on GON is limited to +35V. Setting the MAIN voltage above +12V requires reconfiguring the charge pumps to avoid exceeding +35V on GON and -25V on GOFF.

In  addition,  output  capacitors  C21  and  C22  are  rated for +16V. To set MAIN for greater than +16V, use higher-voltage-rated capacitors. Refer to the Main Step-Up Regulator, Output-Voltage Selection section in the MAX17088 IC data sheet for instructions on selecting resistors R1 and R2.

## Detailed Description of Software

The MAX17088 device includes a calibrator that is used for adjusting an LCD's backplane voltage (VCOM) in TFT-LCD displays. The VCOM voltage is adjusted by controlling the amount of sink current drawn by the calibrator. This is accomplished by programming the desired setting into the device's 7-bit internal DAC. The software also facilitates reading of the device and programming of the device's internal MTP. Refer to the MAX17088 IC data sheet for further details.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17088 Evaluation Kit/ Evaluation System

Figure 2. Command Module Interface Window

<!-- image -->

## Table 3. SMBus Commands

| CONTROL              | SMBus COMMAND    | FORMAT                                                                                                                                                               |
|----------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Load DAC             | SMBusSendByte    | Input the desired 7-bit DAC setting into the Command byte combo box. The 7-bit DAC value should be stored in the upper 7 bits (b7-b1) of the byte, with the LSB = 1. |
| Load DAC/program MTP | SMBusSendByte    | Input the desired 7-bit DAC setting into the Command byte combo box. The 7-bit DAC value should be stored in the upper 7 bits (b7-b1) of the byte, with the LSB = 0. |
| Read DAC             | SMBusReceiveByte | Receives 8 bits from the device. The upper 7 bits correspond to the current DAC setting and the LSB = 0.                                                             |
| Device search        | SMBusQuick       | Search for device address shown in the Target Device Address combo box. The MAX17088 device address is 0x9E.                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17088 Evaluation Kit/ Evaluation System

Figure 3. MAX17088 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17088 Evaluation Kit/ Evaluation System

Figure 4. MAX17088 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17088 Evaluation Kit/ Evaluation System

Figure 5. MAX17088 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17088 Evaluation Kit/ Evaluation System

Figure 6. MAX17088 EV Kit PCB Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17088 Evaluation Kit/ Evaluation System

<!-- image -->

Figure 7. MAX17088 EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17088 Evaluation Kit/ Evaluation System

Figure 8. MAX17088 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER