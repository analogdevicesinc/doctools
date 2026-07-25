<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX17105 Evaluation Kit/Evaluation System

## General Description

The MAX17105 evaluation system (EV system) consists of the MAX17105 evaluation kit (EV kit) and the Maxim CMAXQUSB+ command module. Windows ® 2000/XP and Windows Vista ® -compatible software is also available for use with the MAX17105EVCMAXQU+ EV system and can be downloaded from www.maxim-ic.com/evkitsoftware .

The MAX17105 EV kit is a fully assembled and tested surface-mount circuit board that evaluates the high-efficiency MAX17105 white LED (WLED) driver. The MAX17105 EV kit utilizes a step-up DC-DC converter to generate the voltage required to drive up to 8 strings of 12 surface-mount WLEDs. The EV kit uses a 7V to 24V input power and provides an adjustable 0mA to 30mA full-scale LED current. As shipped, the MAX17105 EV kit is configured to be evaluated with 4 strings of 10 WLEDs and includes an I 2 C/SMBus™-compatible interface that allows for software control of the brightness in 256 steps, backlight controller operating mode, manufacturer and silicon revision detection, and fault detection.

The Maxim CMAXQUSB+ command module provides the I 2 C/SMBus interface and is connected to the computer through the universal serial bus (USB) port. The MAX17105 EV kit software provides a graphical user interface (GUI) for exercising the MAX17105 features.

## MAX17105 EV System (MAX17105EVCMAXQU+)

| DESIGNATION    |   QTY | DESCRIPTION          |
|----------------|-------|----------------------|
| MAX17105EVKIT+ |     1 | MAX17105 EV kit      |
| CMAXQUSB+      |     1 | Maxim command module |

Features

- ♦ 7V to 24V Input Range
- ♦ 85% Efficiency (VIN = 12V, Load = 4 WLED Strings, 30mA)
- ♦ WLED Drives Up to 30mA/String
- ♦ Drives 4 Strings of 10 WLEDs (Capable of Driving Up to 8 Strings)
- ♦ Full-Scale LED Current Adjustable from 0mA to 30mA
- ♦ Resistor-Adjustable Switching Frequency (500kHz to 2MHz, Component Change Required)
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART               | TYPE      |
|--------------------|-----------|
| MAX17105EVKIT +    | EV Kit    |
| MAX17105EVCMAXQU + | EV System |

Note: The Maxim CMAXQUSB+ command module is required when using the MAX17105 EV kit software.

## Component Lists

## MAX17105 EV Kit (MAX17105EVKIT+)

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K TDK C1608X7R1H104K   |
| C2            |     1 | 0.022µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H223K TDK C1608X7R1H223K |
| C3            |     1 | 4.7µF ±10%, 25V X5R ceramic capacitor (1206) Murata GRM319R61E475K                      |

Windows and Windows Vista are registered trademarks of Microsoft Corp. SMBus is a trademark of Intel Corp.

## MAX17105 Evaluation Kit/Evaluation System

## Component Lists (continued)

## MAX17105 EV Kit (MAX17105EVKIT+) (continued)

| DESIGNATION                                                                    |   QTY | DESCRIPTION                                                                                |
|--------------------------------------------------------------------------------|-------|--------------------------------------------------------------------------------------------|
| C4                                                                             |     0 | Not installed, through-hole OSCON capacitor (OSCON-B)                                      |
| C5, C6                                                                         |     2 | 1µF ±10%,10V X7R ceramic capacitors (0603) Taiyo Yuden LMK107BJ105KA Murata GRM188R71A105K |
| C7-C11                                                                         |     5 | 1µF ±10%, 50V X7R ceramic capacitors (1206) Murata GRM31MR71H105KA TDK C3216X7R1H105K      |
| C12, C32-C37                                                                   |     0 | Not installed, capacitors (1206)                                                           |
| C13-C20, C22-C31                                                               |     0 | Not installed, ceramic capacitors (0603)                                                   |
| C21                                                                            |     1 | 220pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H221K TDK C1608X7R1H221K      |
| D1, D98                                                                        |     2 | 2A, 40V Schottky diodes (M-Flat) Toshiba CMS11 Nihon EC21QS04                              |
| D2-D11, D14- D23, D26-D35, D38-D47, D50- D59, D62-D71, D74-D83, D86-D95        |    80 | White LEDs Nichia NSSW008CT-P1 OPTEK OVSRWACR6                                             |
| D12, D13, D24, D25, D36, D37, D48, D49, D60, D61, D72, D73, D84, D85, D96, D97 |     0 | Not installed, white LEDs                                                                  |
| D99                                                                            |     1 | Dual Schottky diode (SOT23) Zetex BAT54C Diodes, Inc. BAT54C-7-F                           |
| J1                                                                             |     1 | 2 x 10 right-angle receptacle                                                              |

| DESIGNATION             |   QTY | DESCRIPTION                                                           |
|-------------------------|-------|-----------------------------------------------------------------------|
| J2-J9                   |     8 | 11-pin headers                                                        |
| JU1-JU4, JU11, JU13     |     6 | 3-pin headers                                                         |
| JU5-JU8, JU10           |     0 | Not installed, 3-pin headers- shorted by PCB                          |
| JU9, JU12               |     2 | 2-pin headers                                                         |
| JU14                    |     0 | Not installed, 2-pin header                                           |
| L1                      |     1 | 10µH, 1.5A power inductor TDK VLP6812T-100M1R5                        |
| OSC, OVP, TP1-TP18, VCC |    21 | Test points                                                           |
| Q1                      |     1 | 30V, 65m p-channel MOSFET (6 TSOP) Vishay Si3481DV Fairchild FDC658AP |
| R1                      |     1 | 10k ±5% resistor (0603)                                               |
| R2                      |     1 | 2.21M ±1% resistor (0603)                                             |
| R3                      |     1 | 71.5k ±1% resistor (0603)                                             |
| R4                      |     1 | 33k ±5% resistor (0603)                                               |
| R5, R6                  |     2 | 100k ±1% resistors (0603)                                             |
| R7, R8                  |     2 | 500k multiturn potentiometers                                         |
| R9, R12                 |     0 | Not installed, resistors (0603)                                       |
| R10                     |     1 | 5.1k ±5% resistor (0603)                                              |
| R11                     |     1 | 1M ±5% resistor (0603)                                                |
| R13                     |     1 | 200k ±5% resistor (0603)                                              |
| R14                     |     1 | 10 ±5% resistor (0603)                                                |
| R15-R22                 |     0 | Not installed, resistors-shorted by PCB (0603)                        |
| U1                      |     1 | White LED driver with boost regulator (24 TQFN) Maxim MAX17105ETG+    |
| -                       |     8 | Shunts                                                                |
| -                       |     1 | PCB: MAX17105EVALUATIONKIT+                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17105 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE                     |
|---------------------------------------------|--------------|-----------------------------|
| Diodes, Inc.                                | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                     | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc.      | 770-436-1300 | www.murata-northamerica.com |
| Nichia Corp.                                | 248-352-6575 | www.nichia.com              |
| Nihon Inter Electronics Corp.               | 847-843-7500 | www.niec.co.jp              |
| OPTEK Technologies                          | 972-323-2200 | www.optek.com               |
| Taiyo Yuden                                 | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                                   | 847-803-6100 | www.component.tdk.com       |
| Toshiba America Electronic Components, Inc. | 949-623-2900 | www.toshiba.com/taec        |
| Vishay                                      | 402-563-6866 | www.vishay.com              |
| Zetex Semiconductors                        | 631-543-7100 | www.zetex.com               |

Note: Indicate that you are using the MAX17105 when contacting these component suppliers.

## MAX17105 EV Kit Files

| FILE         | DESCRIPTION                                |
|--------------|--------------------------------------------|
| INSTALL.EXE  | Installs the EV kit files on your computer |
| MAX17105.EXE | Application program                        |

## Quick Start

## Recommended Equipment

- 7V to 24V, 1A power supply (IN)
- User-supplied PC running Windows 2000/XP or Windows Vista
- Available USB port

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Table 1. Default Jumper Positions (JU1-JU10, JU12, JU13)

| JUMPER              | DEFAULT SHUNT POSITION   |
|---------------------|--------------------------|
| JU1-JU4             | 1-2                      |
| JU5-JU8, JU10, JU12 | Not installed            |
| JU9                 | Installed                |
| JU13                | 2-3                      |

<!-- image -->

## Procedure

The MAX17105 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) On the MAX17105 EV kit, verify that the shunts are installed in their default positions, as shown in Table 1.
- 2) The MAX17105 can operate at direct PWM mode or SMBus mode and the operating mode selection depends on jumper JU11 (Table 2).

## Table 2. Jumper JU11 Function

| SHUNT POSITION   | MODE            |
|------------------|-----------------|
| 1-2              | Direct PWM mode |
| 2-3*             | SMBus mode      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17105 Evaluation Kit/Evaluation System

## SMBus Mode Operation

- 1) On the CMAXQUSB command module, ensure that the shunt on jumper JU1 is in the 5V (default) position.
- 2) Follow the positions in Table 2 for SMBus mode operation.
- 3) Carefully connect the boards by aligning the 20-pin connector of the MAX17105 EV kit with the 20-pin header on the CMAXQUSB interface board. Gently press them together.
- 4) Connect the positive terminal of the IN power supply  to  the  IN  pad.  Connect  the  ground  terminal  of the IN power supply to the PGND pad.
- 5) Connect the USB cable from the computer's type-A USB port to the CMAXQUSB board's type-B USB port.
- 6) Download the MAX17105 EV kit software from www.maxim-ic.com/evkitsoftware and install it on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 7) Set the IN power supply to 12V and enable its output.
- 8) Start the MAX17105 program by opening its icon in the Start menu.
- 9) Normal device operation is verified when CMAXQUSB Module: Connected. MAX17105 Connected is displayed at the bottom-left side of the MAX17105 EV kit window (Figure 1).

## Direct PWM Mode Operation

- 1) The MAX17105 direct PWM (DPWM) mode can be selected through jumper JU11, as shown in Table 2.
- 2) Connect the positive terminal of the IN power supply  to  the  IN  pad.  Connect  the  ground  terminal  of the IN power supply to the PGND pad. Set the IN power supply to 12V and enable its output.
- 3) The MAX17105 can start up by configuration of jumper JU12. When a shunt is installed on JU12, the EN pin is pulled high and the MAX17105 direct PWM mode is enabled. When JU12 is left open, the EN pin in pulled low through R6 and the MAX17105 is disabled.

Figure 1. MAX17105 EV Kit Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17105 Evaluation Kit/Evaluation System

Table 3. Operating Modes Selected by Device Control Register

| PWM_MD   |   PWM_SEL | OPERATING MODE       |
|----------|-----------|----------------------|
| X        |         1 | PWM mode             |
| 1        |         0 | SMBus mode           |
| 0        |         0 | SMBus mode with DPST |

## Detailed Description of Software

## User-Interface Panel

The program's main window (Figure 1) is navigated by using a mouse or a combination of the Tab and Arrow keys. The MAX17105 EV kit software provides controls for software-configurable features: Brightness Control , Device  Control , Fault/Status detection,  and Manufacturer ID/Silicon Revision detection. Changes to  the  controls  result  in  a  write  operation  that  updates the appropriate registers of the MAX17105. A status bar is  also  provided at the bottom of the program's main window and is used to verify command module and device connectivity. A Device Search option is available from the Action menu bar in case the user would like to switch from demo mode to normal operation.

## Brightness Control and Level

The MAX17105 can be configured to one of any 256 steps of brightness control. To set the brightness, slide the Brightness Control track bar to the desired position from 0 ( Min ) to 255 ( Max ). The track bar position is then displayed in the Brightness Level group box.

## Device Control

The MAX17105's device control register controls the operating mode of the backlight (BL) controller and BL on/off  state.  The  MAX17105 operating mode can be configured by setting the bits shown in Table 3.

<!-- image -->

## Fault/Status Detection

The MAX17105's fault/status read-only register monitors  the  BL  controller's  operating  state.  This  register detects the backlight on/off state, whether one or two LED output channels are shut down, overcurrent conditions, and thermal faults. When a fault is detected, the corresponding bit is changed from logic 0 to logic 1 and the font color is changed to red. Refer to the MAX17105 IC data sheet for more information regarding the fault/status register.

Manufacturer/Silicon Revision Detection The ID Register group box displays the manufacturer and silicon revision information of the MAX17105 IC. This information is read upon initial start-up. Refer to the MAX17105 IC data sheet for more information regarding the ID register.

## Simple I 2 C/SMBus Commands

There are two methods for communicating with the MAX17105, through the normal user-interface panel (Figure 1) or through the SMBus commands available by selecting the Interface Diagnostic Window menu item from the Action menu bar. The Maxim Command Module Interface window pops up and includes a 2-wire interface tab that allows for execution of simple I 2 C/SMBus commands.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 2 for an illustration of this tool.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17105 Evaluation Kit/Evaluation System

Figure 2. Interface Diagnostic Window

<!-- image -->

## Detailed Description of Hardware

The MAX17105 EV system (MAX17105EVCMAXQU+) consists of the MAX17105 EV kit and the Maxim CMAXQUSB+ command module. The EV kit evaluates the MAX17105 WLED driver and the CMAXQUSB+ provides the I 2 C/SMBus-compatible interface for software control of the LED brightness in 256 steps, backlight controller operating mode, manufacturer and silicon revision detection, and fault detection.

The MAX17105 EV kit utilizes a step-up DC-DC converter to generate the voltage required to drive up to 8 strings of 12 surface-mount WLEDs. As shipped, the MAX17105 EV kit is configured to be evaluated with 4 strings of 10 WLEDs.

## White LED (WLED) String Configuration

As configured, the MAX17105 EV kit is assembled with 4 active strings of 10 WLEDs (strings 1-4), but can be reconfigured to drive up to 8 strings of 12 WLEDs. Each string  has  an  associated 3-pin jumper (JU1-JU8) and feedback pin (FB1-FB8). To evaluate additional strings (strings 5-8), the EV kit must be reconfigured as follows:

- 1) Cut the trace (solder side) between pins 2-3 of the string's associated header footprint (JU5-JU8).
- 2) Install  a  3-pin  jumper  (JU5-JU8)  and  configure  its shunt according to Table 4.

To evaluate the EV kit with off-board WLED strings see the Off-Board White LED String Configuration section.

To evaluate 12 WLEDs per string, remove R15-R22 and populate the corresponding WLED footprints, as necessary.

## Table 4. Jumper JU1-JU8 Function

| SHUNT POSITION   | FB_ PIN                             | STRING_                       |
|------------------|-------------------------------------|-------------------------------|
| 1-2              | Connected to cathode of WLED string | Enabled                       |
| 2-3              | Connected to GND                    | Disabled                      |
| Not installed    | Connect to an external WLED string  | On-board WLED string not used |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17105 Evaluation Kit/Evaluation System

## Off-Board White LED String Configuration

The MAX17105 EV kit can also be used to drive offboard WLED strings. To evaluate external WLED strings, remove the shunts from jumpers JU1-JU8. See Table 4 for  jumpers JU1-JU8 settings and Table 5 for jumper JU9 settings. Removing these jumpers effectively disconnects the on-board WLED strings from between the output and feedback pins, allowing the connection of external WLED strings. For each external WLED strings, connect the cathode terminal of the string to the corresponding feedback pad (FB1-FB8) and connect the anode terminal of the string to the VOUT pad. Once the external WLED strings are connected between the VOUT pad and the FB\_ pins, the EV kit can be evaluated in the same manner as with the on-board WLED strings. Evaluating more than 10 WLEDs per string may require component changes. Refer to the MAX17105 IC data sheet for component selections.

## LED String Capacitance

In some LCD panel applications, a 0.1µF (typ) capacitor (CLED) is placed in parallel with each LED string to improve ESD immunity. As such, the MAX17105 EV kit provides a footprint across each LED string.

## Setting DPWM Frequency (fDPWM)

When the SMBus mode is enabled, an internal DPWM signal is used to perform dimming control. The DPWM frequency is specified by an external resistor connected from the DFSET pin to SGND:

<!-- formula-not-decoded -->

where RDFSET equals R1 + R8. The acceptable resistance range is 10k Ω &lt; RDFSET &lt; 500k Ω ,  which corresponds to the DPWM frequency of 5kHz &gt; fDPWM &gt; 100Hz.

Table 5. Jumper JU9 Function

| SHUNT POSITION   | VOUT                                         |
|------------------|----------------------------------------------|
| Installed*       | Connected to anodes of on-board WLED strings |
| Not installed    | Connect to anodes of off-board WLED strings  |

<!-- image -->

## Input Fault Bypass (Fault)

The MAX17105 EV kit features a p-channel MOSFET switch (Q1) to protect against fault conditions. This is an optional feature and can be bypassed through selection of jumper JU13. See Table 6 for jumper settings.  Refer  to  the  MAX17105 IC data sheet for more information on the fault feature.

## Setting Full-Scale LED Current (ILED(FS))

The full-scale current through each WLED string is configured by connecting ISET (pin 2) to SGND through resistors R4 and R7. The full-scale current per string is adjustable from 0mA to 30mA:

<!-- formula-not-decoded -->

where R4 is a 33k Ω resistor and R7 is a 500k Ω potentiometer.

Connecting ISET to SGND sets the test mode for 0.3mA (typ) full-scale LED current. It can be implemented by cutting the trace (solder side) between pins 2-3 of JU10 and configure the shunt position of JU10 to pins 1-2.

## Switching-Frequency Selection (OSC)

The resistance from OSC to SGND sets the step-up regulator's oscillator frequency.

<!-- formula-not-decoded -->

where ROSC is R5. The acceptable resistance range is 50k Ω &lt; ROSC &lt; 200k Ω ,  which corresponds to the switching  frequency  of  2MHz  &gt;  fSW &gt;  500kHz. Changing the switching frequency may require different converter components. Refer to the MAX17105 IC data sheet for proper component selections.

Table 6. Jumper JU13 Function

| SHUNT POSITION   | Q1 FAULT PROTECTION   |
|------------------|-----------------------|
| 1-2              | Bypassed              |
| 2-3*             | Enabled               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17105 Evaluation Kit/Evaluation System

Figure 3. MAX17105 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17105 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX17105 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17105 Evaluation Kit/Evaluation System

Figure 5. MAX17105 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17105 Evaluation Kit/Evaluation System

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17105 Evaluation Kit/Evaluation System

Figure 7. MAX17105 EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17105 Evaluation Kit/Evaluation System

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17105 Evaluation Kit/Evaluation System

Figure 9. MAX17105 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600