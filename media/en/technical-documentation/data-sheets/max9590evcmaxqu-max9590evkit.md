<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX9590 Evaluation Kit/Evaluation System

## General Description

The MAX9590 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX9590. The MAX9590 EV kit provides 14 programmable voltage references and 4 static voltage references for gamma correction in TFT-LCD displays. Two register banks are provided to store two sets of gamma reference values. Gamma values are programmed into the banks through the I 2 C interface, and the settling time for outputs is less than 0.5µs.

The 14 programmable reference voltages are divided evenly into seven upper and seven lower voltages for the upper and lower gamma curves of LCD column drivers. The 14 programmable buffers wake-up in a highimpedance state until the registers are programmed. This protects the LCD system from high transient currents during the startup phase.

The EV kit includes Windows ® 98SE/2000/XP-compatible software that provides a graphical user interface (GUI) for exercising the features of the MAX9590.

The MAX9590 evaluation system (EV system) consists of  the  MAX9590EVKIT and a companion CMAXQUSB serial interface board. The CMAXQUSB interface board allows a PC to control an I 2 C interface using its USB port.  Order the MAX9590EVCMAXQU for a complete PC-based evaluation of the MAX9590. Order the MAX9590EVKIT if you already have a MAX9590 compatible serial interface.

Windows is a registered trademark of Microsoft Corp.

## Ordering Information

| PART                      | TYPE INTERFACE                            |
|---------------------------|-------------------------------------------|
| EV kit                    | MAX9590EVKIT User-supplied I 2C interface |
| MAX9590EVCMAXQU EV system | CMAXQUSB interface board                  |

## Features

- ♦ 14 Programmable Reference Voltages
- ♦ 4 Static Reference Voltages
- ♦ Max 16.5V Operating Voltage
- ♦ Output Swing within 150mV of Rails
- ♦ Peak Current Greater than 200mA
- ♦ Output Channels Tri-Stated During Wake-Up
- ♦ USB Powered (EV System Only)
- ♦ Proven PC Board Layout
- ♦ Free Windows 98SE/2000/XP-Compatible Evaluation Software at www.maxim-ic.com
- ♦ Fully Assembled and Tested

## Component List MAX9590 EV Kit

| DESIGNATION        |   QTY | DESCRIPTION                                                                                   |
|--------------------|-------|-----------------------------------------------------------------------------------------------|
| C1-C18             |     0 | Not installed, ceramic capacitors (0603)                                                      |
| C19, C21, C23, C24 |     4 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K or Taiyo Yuden TMK107BJ104KA |
| C20, C22, C25      |     3 | 10µF ±20%, 25V X5R ceramic capacitors (1210) Murata GRM32DR61E106M                            |
| J1                 |     1 | 20-pin, 2 x 10 right-angle receptacle                                                         |
| J2                 |     0 | Not installed, 2 x 20 straight male header                                                    |
| JU1                |     1 | 3-pin header                                                                                  |
| JU2                |     1 | 5-pin header                                                                                  |
| R1-R18             |     0 | Not installed, resistors (0603)                                                               |
| R19, R20           |     2 | 1k Ω ±5% resistors (0603)                                                                     |
| R21, R25           |     2 | 100 Ω ±1% resistors (0603)                                                                    |
| R22, R24           |     2 | 4.32k Ω ±1% resistors (0603)                                                                  |
| R23                |     1 | 1.21k Ω ±1% resistor (0603)                                                                   |
| R26, R27           |     0 | Not installed, resistors (0603)                                                               |
| U1                 |     1 | LCDgammareferencevoltagegenerator (38-pin QFN-EP, 7mm x 5mm) Maxim MAX9590ETU                 |
| -                  |     2 | Shunts                                                                                        |
| -                  |     1 | MAX9590 EV kit PC board                                                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX9590 Evaluation Kit/Evaluation System

## Component List (continued)

## MAX9590 EV System

| PART         |   QTY | DESCRIPTION    |
|--------------|-------|----------------|
| MAX9590EVKIT |     1 | MAX9590 EV kit |
| CMAXQUSB     |     1 | CMAXQUSB board |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE                     |
|-------------|--------------|-----------------------------|
| Murata      | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden | 847-925-0888 | www.t-yuden.com             |
| TDK         | 847-803-6100 | www.component.tdk.com       |

Note: Indicate you are using the MAX9590 when contacting these component suppliers.

## MAX9590 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX9590.EXE             | Application program                        |
| HELPFILE.MHT            | Help file                                  |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

## Quick Start

## Required Equipment

- The Maxim MAX9590EVCMAXQU evaluation system: MAX9590EVKIT CMAXQUSB serial interface board (USB cable included)
- +9V to +16.5V, 3A power supply
- DC voltage measurement equipment, e.g., voltmeter or equivalent
- A user-supplied Windows 98SE/2000/XP PC with an available USB port

Note: In  the  following  section(s),  software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underline refers to items from the Windows 98SE/2000/XP operating system.

## Procedure

Please visit the Maxim Integrated Products website (www.maxim-ic.com) to download the most recent version of the EV kit software 9590RXX.ZIP. The MAX9590 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Set jumper JU1 on the CMAXQUSB at 3.3V or 5V output.
- 2) Set DIP switch SW1 on the CMAXQUSB to the ON position (SCL and SDA line pullup resistors enabled).
- 3) Set the jumpers on the MAX9590EVKIT as follows: JU1: pins 1-2 (EV kit powered by CMAXQUSB) JU2: pins 1-2 (default I 2 C write address is 0xE8)
- 4) Connect the MAX9590 EV kit 2 x 10-pin receptacle (J1) to the CMAXQUSB 2 x 10-pin header (P3).
- 5) Connect the 9V to 16.5V DC power supply to the AVDD and AGND pads on the EV kit and turn on the power supply.
- 6) Install  the  MAX9590 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created for them in the Windows Start menu |  All  Programs | Maxim MAX9590 Evaluation Kit by default.
- 7) Connect the USB cable between the PC's USB port and the CMAXQUSB's USB connector (P2). A New Hardware Found window should pop up. If you do not see this window after about 30 seconds, try removing the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000 and Windows XP. Refer to the TROUBLESHOOTING\_USB.PDF file if problems are experienced during this step.
- 8) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX9590 (or  the  directory  chosen during installation) using the Browse button.
- 9) Start  the  MAX9590 EV kit software by opening its icon in the Start | All Programs | Maxim MAX9590 Evaluation Kit .
- 10) The program automatically detects the MAX9590 address and displays it on the bottom of the window. By default, the software sets the MAX9590 in Standard operation mode and selects bank A to be buffered to the output.
- 11) Measure the voltages on the VREFU\_H, VREFU\_L, VREFL\_H, VREFL\_L pads, and type the values in

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9590 Evaluation Kit/Evaluation System

the corresponding fields in the Reference Voltages (V) group box.

- 12) Move the slide bars or type in appropriate register values for any output channels, and click the Load All Values To Registers button. Using the voltage mea-

<!-- image -->

Figure 1. MAX9590 Evaluation Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

surement equipment, verify that the output voltages are close to the corresponding expected voltages.

## MAX9590 Evaluation Kit/Evaluation System

## Detailed Description of Software

The evaluation software's main window is shown in Figure 1.

## I 2 C Address Setting

If  the Auto Detect Address checkbox is checked, the software automatically detects the I 2 C address of the MAX9590. The MAX9590's I 2 C slave address is displayed on the status bar of the software window and the address pulldown menu. If an address is manually selected in the address pulldown menu, then the software probes the designated address and displays appropriately. If no acknowledgement is received from the EV kit, a pop-up window is opened and the user is directed to properly set JU2 on the EV kit.

## Upper and Lower DAC Reference Voltages

The upper and lower DAC reference voltages are generated by either an on-board resistor-divider network or external  references  applied  on  the  VREFU\_H, VREFU\_L, VREFL\_H, and VREFL\_L pads. The actual voltages on these four pads MUST be captured and typed in the fields within the Reference Voltages (V) group box for the calculated DAC output voltages shown in the Upper DAC Channels/Lower DAC Channels group boxes to be correct.

The transfer function for upper DAC channels is:

<!-- formula-not-decoded -->

The transfer function for lower DAC channels is:

<!-- formula-not-decoded -->

In both formulas, D is the decimal register value.

When the evaluation software is run for the first time, the  reference  voltage  values  in  the Reference Voltages (V) group box are loaded from an initialization file (REF.INI). The user should measure the actual voltage values on the VREFU\_H, VREFU\_L, VREFL\_H, and VREFL\_L pads and type in the values in the appropriate fields on the software main window. When the program is closed, the reference voltages in the current fields are logged in the initialization file, so the next time when the program is run, the reference voltages are loaded automatically.

## Register Addressing Mode

The Standard and Register selections in the Register Addressing Mode box set the MAX9590 operation mode.

## Output Bank Select

The Bank A , Bank B , and A, B Alternating selections in the Output Bank Select box select the set of reference voltages buffered to the outputs, either bank A, bank B, or alternating between bank A and bank B with 1 second hold time for each bank.

## Change Register Values

Register values can be set in three different ways. First, a user can move the slide bars and monitor the register values and expected output voltages in the corresponding fields. Second, a user can type in register values directly. Last, a user can type in expected output voltages and the software calculates and displays the closest register values for the user.

When a register value is changed, the corresponding field  changes its  color  to  red.  A  user  should  synchronize the GUI fields and actual device registers by clicking either the Load button (in register mode) or the Load All Values To Registers button (in standard mode).

The Load All Reg Values From File button is used to load all the register values and reference voltages from a text file. The Save All Reg Values To File button is used to save all the register values and reference voltages on the current GUI to a text file.

Register read/write operations can take place regardless  of  the  output  bank  setting;  for  example,  the  user can change bank B registers when bank A is buffered to the outputs.

## Register Power-On Reset

Click the Register Power On Reset button to set all the registers to the default power-on values. The MAX9590 cannot be set to high-impedance output mode by the Register Power On Reset button.

## Register Mode I 2 C Activity

The Register Mode I2C Activity group box is used for the convenience of debugging in register mode. When an individual register is written, the bits sent to the MAX9590 through the I 2 C interface are displayed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9590 Evaluation Kit/Evaluation System

## Detailed Description of Hardware

## MAX9590 EV System

The MAX9590 EV system is a PC-controlled reference voltage generation system consisting of a MAX9590 EV kit and the Maxim CMAXQUSB serial interface board.

## CMAXQUSB Serial Interface Board

The CMAXQUSB serial interface board uses a proprietary design to provide SPI  - and I 2 C-compatible interfaces to demonstrate various Maxim devices. Maxim reserves the right to change the implementation of this module at any time with no advance notice.

## CMAXQUSB Power Supply

Do not plug a power adapter into the P1 power jack because power is provided from the USB port. JU1 on the CMAXQUSB board selects the digital power-supply voltage for the MAX9590 EV kit. Place the shunt on the 3.3V or 5V position for the MAX9590 to work properly.

## Table 1. CMAXQUSB Jumper JU1

| JUMPER   | SHUNT POSITON   | EV KIT DIGITAL SUPPLY VOLTAGE   |
|----------|-----------------|---------------------------------|
| JU1      | 3.3V marking    | 3.3V                            |
| JU1      | 5V marking      | 5V                              |

## MAX9590 EV Kit

The digital power supply for the MAX9590 EV kit comes from either the CMAXQUSB interface board or the usersupplied external power source. Set the JU1 shunt on pin 1 and pin 2 (default configuration) to use the power supply from the CMAXQUSB interface board. To evaluate  the  MAX9590 with a different digital power-supply voltage, set the JU1 shunt on pin 2 and pin 3 and apply an appropriate voltage on the DVDD and DGND pads.

SPI is a trademark of Motorola, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 2. MAX9590 EV Kit Jumper JU1

| JUMPER   | SHUNT POSITON   | EV KIT DIGITAL SUPPLY VOLTAGE           |
|----------|-----------------|-----------------------------------------|
| JU1      | 1-2*            | CMAXQUSB interface board supplied       |
| JU1      | 2-3             | User supplied (from DVDD and DGND pads) |

The analog power supply for the MAX9590 EV kit comes from the AVDD and AGND pads; apply a +9V to +16.5V, 3A power supply on the AVDD and AGND pads on the EV kit.

## MAX9590 Slave Address Description

The MAX9590 I 2 C address can be set by JU2. See Table 3 for address configuration.

## Table 3. MAX9590 EV Kit Jumper JU2

| JUMPER   | SHUNT POSITION              | MAX9590 WRITE ADDRESS (hex)   |
|----------|-----------------------------|-------------------------------|
| JU2      | 1-2* (A0 connected to DGND) | 0xE8                          |
| JU2      | 1-3 (A0 connected to DVDD)  | 0xEA                          |
| JU2      | 1-4 (A0 connected to SCL)   | 0xEC                          |
| JU2      | 1-5 (A0 connected to SDA)   | 0xEE                          |

* Default configuration.

## MAX9590 Evaluation Kit/Evaluation System

Figure 2. MAX9590 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9590 Evaluation Kit/Evaluation System

<!-- image -->

Figure 3. MAX9590 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9590 Evaluation Kit/Evaluation System

Figure 4. MAX9590 EV Kit PC Board Layout-Component Side

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9590 Evaluation Kit/Evaluation System

Figure 5. MAX9590 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 9