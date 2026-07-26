<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1407 Evaluation Kit/Evaluation System

## General Description

The MAX1407 evaluation system (EV system) is a complete, multichannel, data-acquisition system (DAS) consisting of a MAX1407 evaluation kit (EV kit) and a Maxim 80C32MODULE-DIP microcontroller (µC) module. The MAX1407 is a low-power, multichannel, general-purpose DAS with a bidirectional serial interface, and several built-in system support functions. Windows ® 95/98/2000/NT4.0/XP/ME-compatible software provides a handy user interface to exercise the MAX1407's features.  User interface C++ source code and Intel 8051 assembly language code for the lower-level functions is provided for user convenience and expansion. A powerful scripting language is incorporated into the software, enabling quick and flexible experimentation without C, C++, or assembly language tools.

Order the complete EV system (MAX1407EVSYS) for comprehensive evaluation of the MAX1407 using a personal computer. Order the EV kit (MAX1407EVKIT) if the 80C32MODULE-DIP module has already been purchased with a previous Maxim EV system, or for custom use in other µC-based systems.

| DESIGNATION          |   QTY | DESCRIPTION                                    |
|----------------------|-------|------------------------------------------------|
| C1, C12              |     2 | 4.7µF ±20%, 10V X7R ceramic capacitors (1206)  |
| C2, C6, C8-C11       |     6 | 0.1µF ±10%, 16V ceramic capacitors (0805)      |
| C3                   |     1 | 0.018µF ±10%, 10V X7R ceramic capacitor (0603) |
| C4, C5, C7, C14, C15 |     5 | 10µF ±20%, X7R 10V ceramic capacitors (1210)   |
| C13                  |     1 | 22pF ±5%, 50V ceramic capacitor (0603)         |
| J1                   |     1 | 2 × 20 right-angle socket                      |
| JU1-JU8, JU10, JU14  |    10 | 2-pin headers                                  |
| JU10, JU11           |     2 | Shunt jumpers (installed)                      |
| JU11, JU12, JU13     |     3 | 3-pin headers                                  |
| L1                   |     1 | 47µH ±10%, 0.44A power inductor                |
| L2, L3               |     2 | Ferrite beads, 90 Ω at 100MHz (1206)           |
| R1                   |     1 | 150k Ω ±1% resistor (1206)                     |
| R2                   |     1 | 301k Ω ±1% resistor (1206)                     |

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- ♦ Proven PC Board Layout
- ♦ Complete Evaluation System
- ♦ Convenient Test Points
- ♦ Through-Hole Prototyping Area
- ♦ Data-Logging Software
- ♦ Built-In Scripting Language
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | INTERFACE TYPE   |
|--------------|--------------|------------------|
| MAX1407EVKIT | 0°C to +70°C | User supplied    |
| MAX1407EVSYS | 0°C to +70°C | Windows software |

Note: The MAX1407 software is designed for use with the complete evaluation system (MAX1407EVSYS), which includes the 80C32MODULE-DIP together with MAX1407 EV kit. The MAX1407 EV kit board can be purchased by itself, without the microcontroller.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| R3-R9         |     7 | 100k Ω ±1% resistors (1206)                                   |
| R13-R33       |    21 | 10k Ω ±1% resistors (1206)                                    |
| SW1, SW2      |     2 | Momentary switches                                            |
| TP1-TP4       |     4 | Test points                                                   |
| U1            |     1 | MAX1407CAI (28-pin SSOP)                                      |
| U2            |     1 | MAX1833EUT (6-pin SOT23)                                      |
| U3            |     1 | Texas Instruments SN74LVC244A (20-pin SO)                     |
| U4, U5        |     2 | MAX978EEE (16-pin QSOP)                                       |
| U6            |     1 | MAX8863T/S/REUK (5-pin SOT23)                                 |
| U7            |     1 | MAX6162AESA (8-pin SO)                                        |
| U8            |     1 | MAX5154ACEE (16-pin QSOP) (use MAX5155ACEE with a +3V supply) |
| Y1            |     1 | 32.768kHz, 6pF watch crystal Epson C-002RX32.768K-E           |
| None          |     1 | 3in × 5.4in PC board MAX1407 EV kit                           |
| None          |     1 | 3.5in software disk MAX1407 EV kit                            |

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

Features

## MAX1407 Evaluation Kit/Evaluation System

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| None          |     1 | Maxim 80C32 µC module monitor ROM; version 2.0 (version 1.0 ROM does not work with this EV kit) |
| None          |     1 | MAX1407/MAX1408/MAX1409/ MAX1414 data sheet                                                     |
| None          |     1 | MAX1407 EV system/EV kit data sheet                                                             |
| None          |     1 | MAX186 EV system/EV kit data sheet (includes 80C32 µC module documentation)                     |

## Windows Application Program Files

| FILE                                                                                                                                | DESCRIPTION                            |
|-------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| MAX1407.exe                                                                                                                         | Main application                       |
| kit1407.c32                                                                                                                         | Software loaded into 80C32 µC          |
| sc.exe                                                                                                                              | Script compiler for the Small language |
| ADC.html, BlockDiagram.html, Clock.html, DAC.html, Graphs.html, index.html, Menus.html, Registers.html, Scripting.html, System.html | Software application help files        |
| smalldoc.pdf                                                                                                                        | Help file for Small scripting language |
| console.inc, core.inc, fixed.inc, float.inc, MAX1407.inc, power.inc, time.inc                                                       | Include files for Small scripts        |

## 80C32 Source Code Files

| FILE         | DESCRIPTION                                                                                                                                                                  |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| kit1407.asm  | Main source code for the kit1407.c32 program. Provided for reference. Maxim holds the copyright, but allows customers to adapt the program for their own use without charge. |
| protocol.txt | Text document describing the command set of the kit1407.c32 program.                                                                                                         |

## MAX1407 EV System Component List

| PART            |   QTY | DESCRIPTION     |
|-----------------|-------|-----------------|
| MAX1407EVKIT    |     1 | MAX1407 EV kit  |
| 80C32MODULE-DIP |     1 | 80C32 µC module |

## Example Source Code Files

| FILE                                                                                                                  | DESCRIPTION                                                                                        |
|-----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| MAX1407.bpr                                                                                                           | Borland C++ 5.0 project file                                                                       |
| AbstractMachine.c                                                                                                     | Abstract machine used to run Small scripts                                                         |
| amx.h, amx.c, amxcons.c, amxcore.c, float.cpp                                                                         | Support functions for the Small abstract machine                                                   |
| MAX1407.cpp                                                                                                           | Main entry point for the application                                                               |
| Max8032Port.h, Max8032Port.cpp                                                                                        | Module used to communicate with the 80C32 µC                                                       |
| Misc.h, Misc.cpp                                                                                                      | Miscellaneous number formatting routines                                                           |
| NativeFunctions.h, NativeFunctions.cpp                                                                                | Functions that allow the Small abstract machine to interact with the EV kit application            |
| ScriptRunner.h, ScriptRunner.cpp                                                                                      | Thread used to execute scripts                                                                     |
| Serial.dfm, Serial.h, Serial.cpp                                                                                      | Form that initializes the appropriate serial port and downloads the code that runs on the 80C32 µC |
| TFormAddLabel.dfm, TFormAddLabel.h, TFormAddLabel.cpp, TFormRemoveLabel.dfm, TFormRemoveLabel.h, TFormRemoveLabel.cpp | Forms used to add/remove labels on a graph                                                         |
| TFormBitDefinition.dfm, TFormBitDefinition.h, TFormBitDefinition.cpp                                                  | Form used to set/clear individual bits in the MAX1407/MAX1408/ MAX1409/MAX1414s' control registers |
| TFormFloatingGraph.h, TFormFloatingGraph.cpp                                                                          | Form that encapsulates a graph while it is detached from the main application                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1407 Evaluation Kit/Evaluation System

## Example Source Code Files (continued)

| FILE                                                                                                                                                                                                 | DESCRIPTION                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| TFormMax1407.dfm, TFormMax1407.h, TFormMax1407.cpp                                                                                                                                                   | Main form of the application; this form handles almost all user interaction  |
| TLCDDisplay.dfm, TLCDDisplay.h, TLCDDisplay.cpp                                                                                                                                                      | Form that mimics an LCD display; the LCD display is only used in the scripts |
| TMax1407Driver.h, TMax1407Driver.cpp                                                                                                                                                                 | A module used to communicate with the code that is running on the 80C32µC    |
| ADC.bmp, Buffer.bmp, DAC.bmp, DisabledADC.bmp, DisabledBuffer.bmp, DisabledDAC.bmp, DisabledPGA.bmp, DisabledSDC.bmp, MAX1407_14.bmp, MAX1408.bmp, MAX1409.bmp, MAXIM.bmp, MUX.bmp, PGA.bmp, SDC.bmp | Images used by the project                                                   |

## Install/Uninstall Program Files

| FILE        | DESCRIPTION                                  |
|-------------|----------------------------------------------|
| INSTALL.EXE | Installs the EV kit files on your computer.* |

## MAX1407 Stand-Alone EV Kit

The MAX1407 EV kit provides a proven PC board layout to facilitate evaluation of the MAX1407/MAX1408/ MAX1409/MAX1414. It must be interfaced to appropriate timing signals for proper operation. Connect +5V to VDCIN (at the J1 connector or to the +VDC test point), and connect ground return to AGND (at J1 or the GND test point). The board can also be powered from +3V if the MAX5154 DAC is replaced with a MAX5155. See Figure 10. Refer to the MAX1407 data sheet for timing requirements.

<!-- image -->

## MAX1407 EV System

The MAX1407 EV system operates from a user-supplied +8VDC to +16VDC power supply. Windows 95/98/2000/NT4.0/XP/ME software running on a PC interfaces to the EV system board through the computer's  serial  communications port. See the Quick Start section for setup and operating instructions.

## Quick Start

## Recommended Equipment

Obtain the following equipment before you begin:

- Maxim MAX1407EVSYS (contains MAX1407EVKIT board and 80C32MODULE-DIP)
- DC  power  supply  that  generates  +8VDC  to +16VDC at 100mA
- IBM PC-compatible computer running Windows 95/98/2000/NT/ME4.0/XP
- Spare serial communications port, preferably a 9-pin plug
- Serial cable to connect the computer's serial port to the 80C32MODULE-DIP
- 1) Before starting, ensure that the 80C32 module has a rev 2.0 ROM. The software does not function with an earlier revision ROM. See the Upgrading the 80C32 Module section for ROM replacement instructions.
- 2) Carefully connect the boards by aligning the 40-pin header of the MAX1407 EV kit with the 40-pin connector of the 80C32MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 3) Check the jumper settings. See Table 1.
- 4) Connect the DC power source to the µC module at the terminal block located next to the on/off switch along the top edge of the µC module. Observe the polarity marked on the board.
- 5) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin, female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter is required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 6) Install  the  MAX1407 EV kit software on your computer by running the INSTALL.EXE program on the CD ROM. The program files are copied and icons are created for them in the Windows Start menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX1407 Evaluation Kit/Evaluation System

## Table 1. Jumper Functions

| JUMPER   | STATE        | FUNCTION                                                                                                                                                   |
|----------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Closed*      | Connects MAX1407 AV DD and DV DD power supplies                                                                                                            |
| JU1      | Open         | Separates MAX1407 AV DD and DV DD or measures MAX1407 AV DD supply current                                                                                 |
| JU2      | Closed*      | Connects MAX1407 AV DD and DV DD power supplies                                                                                                            |
| JU2      | Open         | Separates MAX1407 AV DD and DV DD or measures MAX1407 DV DD supply current                                                                                 |
| JU3      | Closed*      | Connects MAX1407 PLL FOUT signal to MAX978 comparator; extra loading increases MAX1407 supply current                                                      |
| JU3      | Open         | Unloaded MAX1407 PLL FOUT signal; lower MAX1407 supply current                                                                                             |
| JU4      | Closed*      | MAX6162 (U7) connected as MAX5154 DAC A reference voltage                                                                                                  |
| JU4      | Open         | Allows alternate MAX5154 DAC A reference voltage                                                                                                           |
| JU5      | Closed*      | MAX6162 (U7) connected as MAX5154 DAC B reference voltage                                                                                                  |
| JU5      | Open         | Allows alternate MAX5154 DAC B reference voltage                                                                                                           |
| JU6      | Closed       | MAX5154 DAC, +5V, UPO output connected to 74LVC244A level shifter to provide (+1.8V to +3.6V) V DD voltage levels                                          |
| JU6      | Open         | MAX5154 DAC, +5V, UPO output unconnected (default)                                                                                                         |
| JU7      | Closed*      | MAX1407 DOUT signal connected to 80C32 module, DB6, data bus signal                                                                                        |
| JU7      | Open         | MAX1407 DOUT signal disconnected from 80C32, DB6, data bus signal                                                                                          |
| JU8      | Closed       | MAX1407 DOUT signal connected to 80C32 module, P1.5, port signal                                                                                           |
| JU8      | Open         | MAX1407 DOUT signal disconnected from 80C32, P1.5, port signal (default)                                                                                   |
| JU10     | Closed**     | Connects the MAX5154 DAC A to the MAX8863 linear regulator to create a programmable, power- supply voltage                                                 |
| JU10     | Open         | Disables programmable, power-supply voltage                                                                                                                |
| JU11     | Closed**     | MAX1407 power-supply voltage connected to the MAX1833 power supply (pins 2 and 3 shorted) or to the MAX8863 linear regulator (pins 1 and 2 shorted)        |
| JU11     | Open         | Disconnects both normal power-supply sources (MAX1833 and MAX8863) from the MAX1407 power- supply voltage                                                  |
| JU12     | Closed       | MAX8863 linear regulator input voltage connected to the MAX1833 power supply (pins 2 and 3 shorted) or to the +VDC test point (pins 1 and 2 shorted)       |
| JU12     | Open         | Disconnects MAX1833 and +VDC test point from the MAX8863 linear regulator input; allows MAX8863 linear regulator input voltage from 80C32 module (default) |
| JU13     | Closed       | Connects the MAX1833 power-supply shutdown pin pullup/pulldown resistor to V DD (pins 1 and 2 shorted) or PSGND (pins 2 and 3 shorted)                     |
| JU13     |              | Floats the MAX1833 power-supply shutdown pin pullup/pulldown resistor (default)                                                                            |
| JU14     | Open Closed* | MAX8863 linear regulator input connected to the 80C32 module +5V supply                                                                                    |
| JU14     | Open         | Disconnects MAX8863 linear regulator input from 80C32 module +5V supply                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1407 Evaluation Kit/Evaluation System

Figure 1. Actual MAX1407 EV System

<!-- image -->

The EV kit software evaluates the MAX1407/ MAX1408/MAX1409/MAX1414.

- 7) Slide the 80C32 module's power switch to the ON position, and confirm the red POWER LED turns on.
- 8) Start the MAX1407 program by opening its icon in the Start menu. The program automatically downloads KIT1407.c32 to the module. Once the downl oad  has  successfully  completed,  the  main application window appears.

To ensure that the system is working properly, select the Clock control panel and press Synchronize with PC button. The MAX1407 real-time clock (RTC) should match the PC time (within 1s); if the system is working properly, both clocks are ticking. Note the Continuous Refresh and Enabled boxes must both be checked. Selecting the system control panel can perform another easy check of the system while ensuring the Wakeup status indicators respond to the SW1 or SW2 switch being pressed on the MAX1407 board. Pressing these switches places the MAX1407 in standby mode, which enables some of the chip functions (refer to the MAX1407/MAX1408/MAX1409/MAX1414 data sheet). All  blocks,  including the ADC and DACs, are enabled when run mode is selected on the system control panel.

<!-- image -->

## 80C32MODULE-DIP Description

Refer to the MAX186 EV system/EV kit data sheet for schematics  and  further  details  describing  the 80C32MODULE-DIP module.

## Upgrading the 80C32 µC Module

The MAX1407 EV system requires rev 2.0 of the Maxim 80C32 Module ROM. Check the label on device U3 on the module; if it is labeled rev 1.0, it must be replaced.

The rev 2.0 ROM is a 28-pin DIP that comes with the EV kit.  If  it  was  omitted,  contact  the  factory  for  a  replacement.

To install  the  new  ROM, use the following procedure. Note: Use antistatic handling precautions. To reduce the  risk  of  ESD  damage,  gather  all  required  materials and perform the installation in one sitting:

- 1) Slide the ON/OFF switch to the OFF position.
- 2) Using a flat-blade screwdriver or equivalent tool, gently pry the rev 1.0 ROM (U3) out of its socket.
- 3) Remove the rev 2.0 ROM from its antistatic packaging.
- 4) Align the rev 2.0 ROM in the U3 socket pins. Observe correct polarity (the notch at the top of the ROM). Verify that the pins are lined up with the socket, and gently press the ROM into place.

Proceed to the regular Quick Start instructions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1407 Evaluation Kit/Evaluation System

## Overview of Software

The MAX1407 EV software is configured as a series of control  panels that include related groups of features. The following control panels are available: ADC, DAC, System, Clock, Registers, Scripting, and Block Diagram. There is also an ADC Graph Panel for plotting ADC results vs. time. Panels are selected by clicking their respective tab at the top. General control features such as selecting a specific device (MAX1407/ MAX1408/MAX1409/MAX1414) are available in a menu bar at the top of the window. Help is available through the Block Diagram tab, the top menu bar, or by pressing F1 (panel-specific help).

An image and brief description of each control panel is given in the following sections.

## ADC Control Panel

The ADC control panel provides access to the 16-bit, Sigma-Delta A/D Converter, Programmable-Gain Amplifier (PGA), ADC Buffers, Analog Input Multiplexers, and Signal-Detect Comparator (Figure 2).

## DAC Control Panel

The DAC control panel provides access to the internal voltage reference, as well as the 10-bit DACs (where available) (Figure 3).

## System Control Panel

The System control panel provides access to the two Wakeup Inputs, assorted logic output signals, Power Modes, VDD, and RESET Voltage Monitors, and the MAX5154 dual DACs present on the MAX1407 EV kit (Figure 4).

## Clock Control Panel

The Clock control panel provides access to the RTC and the alarm. The PC system time is also shown to enable easy comparison with the MAX1407 RTC (Figure 5).

## Registers Control Panel

The Registers control panel allows read and write access to the MAX1407 control registers (Figure 6).

## Scripting Control Panel

The Scripting control panel provides a facility to execute simple script programs that run a sequence of actions with the MAX1407 EV system. This allows users to  experiment with MAX1407 features under precise timing control without having to write firmware in C, C++, or assembly language (Figure 7).

6

## Block Diagram Display Panel

The Block Diagram display panel allows quick access to  the  block  diagram  of  the  part  currently  selected  in the Device pulldown menu (MAX1407, MAX1408, MAX1409, or MAX1414). One-button access to the MAX1407 data sheet is also provided for user convenience (Figure 8).

## ADC Graph Display Panel

The ADC Graph display panel allows X-Y plotting of ADC conversion data or derived parameters vs. time. The ADC, mux, and plot display settings can all be adjusted within the ADC Graph display panel. One or more ADC Graph display panels can be opened from the ADC Control panel using the ADC Graph button (Figure 9).

## Detailed Description of Hardware

The MAX1407 (U1) is a multichannel, 16-bit DAS with internal reference, dual 10-bit DACs, and other system support functions. All support circuitry required by the MAX1407, including decoupling capacitors and a 32kHz crystal, are included in the EV kit board layout. External circuitry can be added in the prototype area to configure the ADC input signals, as well as the force/sense DACs. The MAX1833 (U2) is an inductorbased power supply that can be used to battery power the MAX1407. The 74LVC244A (U3) is used to level shift  +5V  logic  input  signals  from  the  80C32  module down to the MAX1407 supply voltage rails (+1.8V to +3.6V). The MAX978 comparators (U4 and U5) are logic-level translators between the MAX1407 (+1.8V to +3.6V) and the 80C32 µC module (+5V). The MAX8863 linear regulator (U6), MAX6162 voltage reference (U7), and MAX5154 DAC (U8) are combined to create a programmable VDD power supply for the MAX1407. When plugged into the 80C32MODULE, the programmable power supply for the MAX1407 is derived from the 80C32 µC module's +5V supply, and no additional power-supply connections are needed. See Figure 10, and  refer  to  the  MAX1407/MAX1408/MAX1409/ MAX1414 data sheet.

## Evaluating the MAX1408, MAX1409, or MAX1414

The MAX1408 or MAX1414 can be soldered directly in the 28-pin SSOP footprint normally occupied by the MAX1407. The MAX1414 pins have the same functions as the MAX1407, with the main difference being the 50mV offset of the MAX1414's internal signal detect comparator. When a MAX1408 is inserted, the upper four analog inputs (AIN4, AIN5, AIN6, and AIN7) corre-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1407 Evaluation Kit/Evaluation System

spond to the MAX1407 DAC signals (OUT1, OUT2, FB1, and FB2). The MAX1409 can be directly soldered to the middle 20 pins of the MAX1407 footprint (i.e., the 4 pins at each end are left exposed). All MAX1409 features are available to the user when installed in the MAX1407 EV kit board. The MAX1408/MAX1409 features are a area subset of the MAX1407 feature set.

## Force/Sense DACs

The MAX1407/MAX1414 each have two force/sense DACs, with feedback (FB1 and FB2) and output (OUT1 and OUT2) pins that are unconnected on the EV kit. The simplest DAC configuration is unity gain, where the FB1/FB2 pin is directly shorted to the OUT1/OUT2 pin (see test access points on the board). Another common configuration is to replace the FB1/FB2 to OUT1/OUT2 short with a resistor to create a transimpedance amplifier. The DAC can then be used to create a DC-bias voltage at the FB1/FB2 pin, which is also the node where input current is injected. A user-programmable voltageoutput  range  can  be  set  with  an  FB1/FB2  to OUT1/OUT2 resistor (R2), and a second resistor between FB1/FB2 and ground (R1) (refer to the MAX1407/MAX1408/MAX1409/MAX1414 data sheet). In this configuration, the output voltage at OUT1/2 is:

VOUT1/2 = (NDAC1/2 ✕ VREF / 1024) ✕ (1 + R2 / R1)

(NDAC1/2 is the MAX1407 DAC1/DAC2 code word between zero and 1023 decimal. VREF is the voltage at the REF pin coming from the internal or an external +1.25V reference.) Care must be taken to ensure the voltage at the OUT1/OUT2 pin is not saturating as it approaches the AVDD rail. The MAX1409 has one force/sense DAC and the MAX1408 has no DACs. Note the EV software assumes the DACs have an ideal +1.25V reference voltage, but an actual, measured value can be entered to display more accurate DAC voltages on the DAC control panel.

## Analog Inputs

The MAX1407/MAX1414 each have 4 pins (IN0-IN3) that  allow  users  to  drive  differential  or  single-ended analog voltages directly into either ADC input, in buffered or unbuffered mode. The MAX1409 has a single analog input (IN0) and the MAX1408 has eight analog inputs (IN0-IN7). There is no lowpass filtering of the analog inputs on the EV kit board. Users should take precautions to avoid undesired noise in narrow bands around the ADC input sampling frequencies (15.36kHz or  30.72kHz plus harmonics, refer to the MAX1407/ MAX1408/MAX1409/MAX1414 data sheet).

<!-- image -->

## Wakeup Input Switches

There are two switches (SW1 and SW2) on the EV kit board that connect directly to the WU1 and WU2 wakeup input pins on the MAX1407/MAX1408/MAX1409/ MAX1414. When the MAX1407/MAX1408/MAX1409/ MAX1414 are in sleep mode, closing either switch wakes the part up in standby mode, enables the PLL, FOUT pin, low VDD monitor, and drives the SHDN pin (except on MAX1409) high. Switch closures are also reflected by the green LEDS on the System control panel of the EV software. A pair of buttons on the System control panel provides equivalent software control of the WU1 and WU2 wakeup inputs.

## Programmable Power-Supply Voltage

A programmable power supply controlled by the 12-bit, MAX5154's DAC A is provided to simplify evaluation of the MAX1407/MAX1408/MAX1409/MAX1414 functions vs.  VDD supply voltage. This is especially convenient when testing threshold voltages on the two voltage monitors. The power-supply voltage can be software controlled from the System control panel of the EV software. The nominal VDD voltage is programmed by the following equation:

## VDD = 3.7479 - 0.0004983389 ✕ NDACA

(NDACA is the MAX5154's DAC A code word between zero and 4095 decimal.) This provides an approximate VDD range of 1.71V to 3.75V in 0.5mV steps, although the actual value varies because of tolerances and other nonidealities. The power-on default value is close to 3.0V. Note the EV software assumes the DAC has an ideal 2.048V reference voltage, but an actual, measured value can be entered on the System control panel to display a more accurate VDD voltage.

## Powering from a MAX1833 Power Supply and Batteries

A MAX1833 inductor-based power supply is included in the  EV  kit,  allowing  users  to  battery  power  the MAX1407/MAX1408/MAX1409/MAX1414 from 2 alkaline cells, or 1 lithium-ion (Li+) cell, and evaluate the following system-level features:

- Power-supply  shutdown  control  through  the MAX1407/MAX1408/MAX1414 SHDN pin
- Sleep-mode operation of the MAX1407/MAX1408/ MAX1409/MAX1414 through the shorted PFET switch inside the disabled MAX1833 (i.e., running directly from the batteries)
- Power-supply switching transient impact on the MAX1407/MAX1408/MAX1409/MAX1414 functions such as ADC output noise

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1407 Evaluation Kit/Evaluation System

To use a MAX1833-based power supply, the battery (or batteries) is connected between the VBATT and PSGND test points, and jumper JU11 is connected between pins 2 and 3. The MAX1407/MAX1408/ MAX1414 have a SHDN output pin that directly tracks the VBATT voltage (because of the MAX1833 PFET shorting VBATT to VDD), and turns the MAX1833 on when VBATT rises above a nominal +1.228V. The MAX1409 does not have a SHDN pin,  and  requires  a shunt between pins 1 and 2 of JU13 to enable the MAX1833. When enabled, the MAX1833 provides a nonprogrammable, +3.3V, VDD supply voltage for the MAX1407/MAX1408/MAX1409/MAX1414 and the 74LVC244A level-shifting buffer. Note that +5V must still be provided at +VDC or VDCIN to power the MAX8863 linear  regulator,  MAX6162 reference, MAX5154 DACs, and (two) MAX978 output comparators. Of all these +VDC-powered parts or VDCIN-powered parts, only the MAX978 comparators are used for EV kit operation when the MAX1407 is powered by the MAX1833. Care should be taken to avoid contention between the MAX1833 output voltage, and a different power supply at VDCIN by leaving pins 2 and 3 of JU12 unconnected.

## Powering the MAX1407 EV Kit Board from +3V

The MAX1407 EV kit can be powered from a +3V (+2.7V to  +3.6V) supply at VDCIN (or +VDC), rather than the normal +5V supply. If the programmable, MAX1407, VDD power supply is to be used, the +5V MAX5154 DAC needs to be replaced by the functionally equivalent, +3V MAX5155. The programmable VDD-setting resistor (R1, R2, and R3) values can be retained with the +3V supply, but the upper end of the VDD range is limited by the specific +3V voltage and the dropout voltage of the MAX8863 linear regulator.

8

## MAX1407/MAX1408/MAX1409/MAX1414 Power-Supply Current Measurement

The MAX1407/MAX1408/MAX1409/MAX1414 DVDD supply current can be measured by open circuiting jumper JU2 and connecting a current-measurement device between pins 1 and 2. The AVDD current can be measured by applying a similar technique to jumper JU1. Capacitive loading of the FOUT pin should be kept small (possibly by opening JU3) to minimize the impact on the MAX1407/MAX1408/MAX1409/MAX1414 power-supply current.

## PLL Clock and Micro Interface Logic Outputs

The PLL clock output at the FOUT pin, and the outputs at  the INT , DRDY, and RESET pins connect to the MAX978 comparator inputs for level shifting to the 80C32 µC module, +5V levels. The level-shifted FOUT signal goes to the 80C32 µC module, but is not used to clock the micro in the MAX1407 EV system. The FOUT signal can be measured directly or after level shifting. The INT and DRDY signals also go to the 80C32 µC module where they are polled by the micro (not connected as interrupts), and their status is visible in the System control panel of the EV software.

## Unused EV Kit DAC and Logic Outputs

DAC B of the MAX5154 is not used, but external circuitry  can be wired to TP1 by the user if desired. The MAX5154 UPO pin is a general-purpose, +5V logic output that can be used directly (at JU6) or level shifted to VDD (+1.8V to +3.6V) voltage levels (available at TP3) by inserting JU6. The MAX5154 DAC B and UPO are accessible through the System control panel of the EV software. The 80C32 µC module's P1.5 port signal (at J1-32 or JU8) can also be used for general-purpose control at +5V levels, while the MAX1407/MAX1408/ MAX1414s' D0 signal is available as a control signal at VDD (or VDCIN) levels. The P1.5 and D0 signals are also programmed with the EV software through the System control panel.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1407 Evaluation Kit/Evaluation System

## Troubleshooting

## Problem: The 80C32 µC module firmware does not download.

Check 80C32 µC module VIN voltage. Ensure that the power switch is in the ON position and the red power LED is illuminated. Ensure that the serial cable is properly connected between the PC and 80C32 µC module. If  connections and power seem correct, press the 80C32 µC module's RESET button and restart the software application on the PC. If the problem persists, check the +5V supply voltage on the 80C32 µC module or try the download procedure with the MAX1407 EV kit board disconnected.

## Problem: The 80C32 µC module firmware downloads, but error messages appear rather than the application window.

Check the 80C32 µC module ROM revision and replace if  it  is  not  rev  2.0.  See  the Upgrading the 80C32 µC Module section for ROM replacement instructions.

## Problem: The firmware downloads and application starts, but MAX1407 functions do not work properly.

Check the 40-pin connection between the 80C32 µC module and the MAX1407 EV kit to make sure it is properly aligned and seated. Ensure that the required jumpers described in Table 1 are installed.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Problem: Some functions, such as the DACs and ADC, are 'grayed out' in the application and cannot be accessed.

Ensure  that  the  MAX1407/MAX1408/MAX1409/ MAX1414 are not in sleep or standby mode, where several  analog blocks are powered down by definition. Everything except the ADC is powered on in idle mode, and everything is powered on in run mode. If DACs are unexpectedly 'grayed out,' make sure the proper MAX1407/MAX1409/MAX1414 part is selected in the device pulldown menu. The MAX1409 has only one DAC, and the MAX1408 has no DACs, so unavailable DACs are grayed out when these devices are selected.

## Problem: The DAC does not produce correct output voltage at the OUT1(OUT2) pin.

The force/sense DAC OUT1(OUT2) to FB1(FB2) feedback connections on the MAX1407 EV kit are open circuited by default, and they must be connected with a short or other circuit element to produce an expected voltage.

## MAX1407 Evaluation Kit/Evaluation System

Figure 2. ADC Control Panel

<!-- image -->

Figure 3. DAC Control Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1407 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. System Control Panel

<!-- image -->

Figure 5. Clock Control Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1407 Evaluation Kit/Evaluation System

Figure 6. Registers Control Panel

<!-- image -->

Figure 7. Scripting Control Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1407 Evaluation Kit/Evaluation System

<!-- image -->

Figure 8. Block Diagram Display Panel

<!-- image -->

Figure 9. ADC Graph Display Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

60

## Evaluates: MAX1407/MAX1408/MAX1409/MAX1414

## MAX1407 Evaluation Kit/Evaluation System

Figure 10. MAX1407 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1407 Evaluation Kit/Evaluation System

<!-- image -->

Figure 11. MAX1407 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1407 Evaluation Kit/Evaluation System

Figure 12. MAX1407 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1407 Evaluation Kit/Evaluation System

<!-- image -->

Figure 13. MAX1407 EV Kit PC Board Layout-Component Side (Layer 1)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1407 Evaluation Kit/Evaluation System

Figure 14. MAX1407 EV Kit PC Board Layout-Ground Planes (Layer 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1407 Evaluation Kit/Evaluation System

<!-- image -->

Figure 15. MAX1407 EV Kit PC Board Layout-Power Planes (Layer 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1407 Evaluation Kit/Evaluation System

Figure 16. MAX1407 EV Kit PC Board Layout-Solder Side (Layer 4)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

20

<!-- image -->