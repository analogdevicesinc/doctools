<!-- lastmod 2022-10-10 -->
| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±20%, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104MA Murata GRM188R71C104K |
| C2, C3        |     0 | Not installed, capacitors (0603)                                                             |
| J1            |     1 | Dual-row, 2 x 10 right-angle receptacle                                                      |
| JU1           |     1 | 2-pin header                                                                                 |
| JU2, JU3, JU4 |     3 | 3-pin headers                                                                                |
| R1, R2        |     2 | 100k Ω ±5% resistors (0603)                                                                  |
| R3            |     1 | 4.7k Ω ±5% resistor (0603)                                                                   |

Windows is a registered trademark of Microsoft Corp.

<!-- image -->

## MAX5128 Evaluation Kit/Evaluation System

## General Description

The MAX5128 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that  evaluates  the  MAX5128 22k Ω ,  linear-taper  digital potentiometer. The EV kit provides both a mechanical pushbutton-controlled interface and a microprocessorcontrolled interface.

The MAX5128 evaluation system (EV system) consists of  the  MAX5128 EV kit and the Maxim CMAXQUSB+ command module. The EV kit includes Windows ® 98SE/2000/XP-compatible software that provides a professional user interface for exercising the MAX5128's features. The program is menu driven and offers a graphical user interface (GUI) complete with control buttons and a track bar.

Order the complete EV system (MAX5128EVCMAXQU+) for  comprehensive evaluation of the MAX5128 using a PC. Order just the EV kit (MAX5128EVKIT+) if the CMAXQUSB+ module has already been purchased with a previous Maxim EV system.

## Features

- ♦ Powered and Controlled from Standard USB Interface (MAX5128EVCMAXQU+)
- ♦ 2.7V to 5.25V Single-Supply Operation
- ♦ Windows 98SE/2000/XP-Compatible Evaluation Software
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Supports Pushbutton Inputs or CPU-Generated Inputs
- ♦ Fully Assembled and Tested

## Ordering Information

| PART              | TEMP RANGE    | IC PACKAGE         | COMMAND MODULE   |
|-------------------|---------------|--------------------|------------------|
| MAX5128EVKIT +    | 0°C to +70°C* | 8 µDFN (2mm x 2mm) | Not included     |
| MAX5128EVCMAXQU + | 0°C to +70°C* | 8 µDFN (2mm x 2mm) | CMAXQUSB+        |

Note: The Maxim CMAXQUSB+ command module is required when using the MAX5128 EV kit software.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| SW1, SW2      |     2 | Momentary pushbutton switches                                                 |
| U1            |     1 | MAX5128ELA+ (8-pin µDFN, 2mm x 2mm)                                           |
| U2            |     1 | Dual CMOS switch debouncer MAX6817EUT+T (6-pin SOT23, 3mm x 3mm)              |
| U3            |     1 | Dual CMOS inverter Fairchild NC7WZ04P6X (6-pin SC70, 2mm x 2mm) (Top Mark: Z) |
| -             |     4 | Shunts                                                                        |
| -             |     1 | PCB: MAX5128 Evaluation Kit+                                                  |

## MAX5128 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE         |
|-----------------------|--------------|-----------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com  |
| Taiyo Yuden           | 800-348-2496 | www.t-yuden.com |

Note: Indicate that you are using the MAX5128 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX5128 EV system: MAX5128 EV kit CMAXQUSB+ command module (USB cable
- included)
- User-supplied Windows 98SE/2000/XP-compatible PC with a spare USB port
- DC power supply, 5V at 100mA (optional)
- Digital multimeter (DMM)

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

The MAX5128 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 5128Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Ensure that  jumper  JU1  (VDD  select)  of  the CMAXQUSB+ is set for 5V operation.
- 4) For PC control, verify that shunts are installed in the following positions:
- 5) Connect the ohmmeter across the H and W pads.
- 6) Carefully connect the boards by aligning the 20-pin connector (J1) of the MAX5128 EV kit with the 20pin header (P3) on the CMAXQUSB+ command module. Gently press them together.
- 7) Connect the USB cable from the PC to the EV kit board. A Building Driver Database window pops up in addition to a New Hardware Found message when installing the USB driver for the first time. If you do not see a window that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows 98SE, 2000, and XP. Refer to the TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.
- 8) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX5128 (default installation directory) using the Browse button.
- 9) Start the EV kit software by opening its icon in the Start |  Programs menu. The EV kit software main window appears, as shown in Figure 1.
- 10) Wait until the program automatically detects the MAX5128.
- 11) The MAX5128 EV kit is ready for evaluation.

- JU1

Installed

- JU2

Installed across pins 1-2

- JU3

Installed across pins 1-2

- JU4

Installed across pins 2-3

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5128 Evaluation Kit/Evaluation System

## Detailed Description of Software

Each button of the GUI (Figure 1) corresponds to a command used to set the wiper position or to program the device.

Warning: Do not remove the shunts of JU2 or JU3 from their  default  positions  while  running  the  software  (see Table 1).

Figure 1. MAX5128 EV Kit Software Main Window

<!-- image -->

## Wiper Control

The track bar in  the Wiper Control group box allows the user to change the wiper position between the highterminal ( H )  and  low-terminal  ( L )  end  points.  Use  the computer mouse, arrow keys, or page-up/page-down keys to move the track bar between the 128 position points. The wiper position can also be changed by entering a numerical position (0 to 127) in the Volatile edit fields. The top Volatile field shows the wiper position  with  respect  to  the H end point, while the bottom Volatile field  shows  the  wiper  position  with  respect  to the L end point.

<!-- image -->

The software calculates the difference between the new number entered and the old value and generates the necessary up/down pulses to position the wiper to the desired value.

## Nonvolatile Programming

To program the nonvolatile memory, write the desired value utilizing  the  GUI's Wiper Control and press the Write NV Register button. This action will write the current wiper position to the nonvolatile register of the device. The 7-bit nonvolatile memory will retain the value written to it even after power-down.

## Resetting the MAX5128

The Factory Reset button programs the volatile and nonvolatile memory to the midscale factory setting.

The software forces the wiper to the extreme of the resistor string and generates 64 up/down pulses to position the wiper to midscale.

## Detailed Description of Hardware

The MAX5128 EV kit supports both mechanical pushbuttons and digital inputs to control the potentiometer's wiper position and is configured by setting jumpers JU2 and JU3. By default, the MAX5128 IC's logic inputs (UP and DN) are controlled through the provided software. Install  shunts  across pins 2-3 for both JU2 and JU3 to control the device's logic inputs through the pushbutton switches (SW1 and SW2). See Table 1 for the EV kit's various jumper settings.

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                             |
|----------|------------------|---------------------------------------------------------|
| JU1      | Installed*       | Low terminal L shunts to ground                         |
| JU1      | Not installed    | Low terminal L floating                                 |
| JU2, JU3 | 1-2*             | Wiper position software controlled                      |
| JU2, JU3 | 2-3              | Wiper position pushbutton controlled (SW1, SW2)         |
| JU4      | 1-2              | EV kit requires external power supply across VCC pad    |
| JU4      | 2-3*             | EV kit uses the CMAXQUSB+ command module's power source |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5128 Evaluation Kit/Evaluation System

## Power Input

The MAX5128 EV kit requires a 2.7V to 5.25V power supply across the VCC and GND pads for normal operation. The EV kit can either be powered through the CMAXQUSB+ command module's power source or by an external power supply. The EV kit's default setting has JU4 installed across pins 2-3 to utilize the CMAXQUSB+ command module's power source (USB powered). Configure the command module's VDD select voltage to 3.3V or 5V (jumper JU1) when using the CMAXQUSB+ to  power the MAX5128 EV kit. Install the EV kit's JU4 jumper across pins 1-2 to use an external power supply.

## Digital Interface

Wiper positioning can be controlled through the momentary pushbutton switches (SW1 and SW2) by installing the jumpers of both JU2 and JU3 across pins

2-3.  The  debouncer (U2) is provided to eliminate the 'contact bounce' that SW1 and SW2 may exhibit.

Toggle the SW1 pushbutton to increment the wiper position. Toggle the SW2 pushbutton to decrement the wiper position. Use the following procedure to program the nonvolatile memory:

- 1) Force UP high (hold SW1).
- 2) Force DN high (hold SW2).
- 3) Transition input UP from high to low (release SW1) and then release SW2.

Refer to the Digital Interface section of the MAX5128 IC data sheet for a more detailed description.

Jumper JU1 can also be used to connect the MAX5128 L pin to the circuit ground, providing a ground reference during evaluation.

Figure 2. MAX5128 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5128 Evaluation Kit/Evaluation System

Figure 3. MAX5128 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 4. MAX5128 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5128 Evaluation Kit/Evaluation System

Figure 5. MAX5128 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600