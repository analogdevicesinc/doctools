<!-- lastmod 2022-08-03 -->
## General Description

The MAX8648 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) for evaluating the ultra-efficient charge pump for six white/RGB LEDs in a 3mm x 3mm thin QFN IC package. This MAX8648 EV kit drives six white LEDs (WLEDs) or one RGB LED module. The EV kit includes three pulse generators that are used for testing the single-wire, serial-pulse dimming of the MAX8648 IC.

The MAX8648 EV kit can also evaluate the MAX8647 when using the Maxim CMAXQUSB+ command module. To evaluate the MAX8647, order the MAX8648 EV kit,  the  CMAXQUSB+ command module, and a free sample of the MAX8647ETE+. The CMAXQUSB+ command module is required for SMBus™ control of the MAX8647. The MAX8647 evaluation software can be  downloaded  from  the  Maxim  website  at www.maxim-ic.com/evkitsoftware.

SMBus is a trademark of Intel Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1-C5         |     5 | 1µF ±20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K    |
| C6, C8, C10   |     3 | 1000pF ±10%, 50V X7R ceramic capacitors (0402) TDK C1005X7R1H102K |
| C7, C9, C11   |     3 | 2.2µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225K |
| D1-D6         |     6 | White LEDs Nichia NSCW215T                                        |
| D7            |     1 | RGB LED Lumex SML-LX2832SISUGSBC                                  |
| D8, D9, D10   |     3 | 100mA, 30V Schottky diodes (SOD523) Central Semiconductor CMOSH-3 |
| J1            |     1 | Dual 2 x 10-pin right-angle receptacle                            |

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                 |
|------------------------|-------|-------------------------------------------------------------|
| JU1-JU9, JU11          |    10 | 3-pin headers                                               |
| JU10, JU12, JU13, JU14 |     4 | 2-pin headers                                               |
| R1, R2                 |     2 | 24 Ω ±1% resistors (0402)                                   |
| R3, R4                 |     2 | Not installed, resistors (0402)                             |
| R5, R6, R7             |     3 | 2.2k Ω ±1% resistors (0402)                                 |
| S1, S2, S3             |     3 | Momentary pushbutton switches                               |
| U1                     |     1 | MAX8648ETE+ (16-pin, 3mm x 3mm thin QFN-EP) (Top Mark: AFE) |
| U2, U3, U4             |     3 | MAX6816EUS+T (4-pin SOT143) (Top Mark: KABA)                |
| -                      |     7 | Shunts, 2 position                                          |
| -                      |     1 | PCB: MAX8648 Evaluation Kit+                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ MAX8648 EV Kit Powers Up to Six WLEDs or One RGB LED Module
- ♦ Adaptive Current Regulators
- ♦ 24mA to 0.1mA Dimming Range Serial-Pulse Dimming Logic (MAX8648) I 2 C Interface (MAX8647)
- ♦ 2% (Max) Accuracy ±0.4% (Typ) Current Matching
- ♦ Low 70 µ A Quiescent Current
- ♦ Low 1 µ A Shutdown Current
- ♦ Thermal TA Derating Function
- ♦ 2.7V to 5.5V Supply Voltage Range
- ♦ 16-Pin, 3mm x 3mm Thin QFN IC Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE                   |
|---------------|---------------|------------------------------|
| MAX8648EVKIT+ | 0°C to +70°C* | 16 Thin QFN-EP** (3mm x 3mm) |

## MAX8648 Evaluation Kit

## Quick Start

## Recommended Equipment

- One 2.7V to 5.5V power supply or a Li+ battery capable of delivering 0.5A

## Procedure

The MAX8648 EV kit is fully assembled and tested. Follow the steps below to verify board operation. EV kit connection diagram is shown in Figure 1. Default jumper settings are shown in Table 1 and Figure 1. Caution: Do not turn on the power supply until all connections are completed.

- 1) Preset the power supply between 2.7V and 5.5V.
- 2) Turn off the power supply.
- 3) On the MAX8648 EV kit, verify jumpers according to Table 1.
- 4) Connect the positive power-supply terminal to the pad on the EV kit labeled VIN.
- 5) Connect the power-supply ground terminal to the pad on the EV kit labeled GND.
- 6) Turn on the power supply.
- 7) Verify that all six WLEDs are lit.

Table 1. MAX8648 EV Kit Default Jumper Settings

| JUMPER                      | SHUNT POSITION              |
|-----------------------------|-----------------------------|
| USING EV KIT PULSE CIRCUITS | USING EV KIT PULSE CIRCUITS |
| JU1                         | Pins 2-3                    |
| JU2                         | Open                        |
| JU3                         | Pins 1-2                    |
| JU4                         | Pins 2-3                    |
| JU5                         | Open                        |
| JU6                         | Pins 1-2                    |
| JU7                         | Pins 2-3                    |
| JU8                         | Open                        |
| JU9                         | Pins 1-2                    |
| JU10                        | Open                        |
| WLED                        | WLED                        |
| JU11                        | Pins 2-3                    |
| JU12                        | Open                        |
| JU13                        | Open                        |
| JU14                        | Open                        |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Kamaya, Inc.          | 260-489-1533 | www.kamaya.com        |
| Lumex Inc.            | 800-278-5666 | www.lumex.com         |
| Nichia Corp.          | 248-352-6575 | www.nichia.com        |
| Panasonic Corp.       | 714-373-7939 | www.panasonic.com     |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |
| Vishay                | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX8648 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. Connection Diagram and Default Jumper Connections

<!-- image -->

## Detailed Description

## LED Dimming Using the EV Kit Pulse-Generating Circuitry

At power-up, the MAX8648 sets the initial LED current to  24mA. To test the dimming feature, verify that the jumper settings in Table 1 are complete, then press any of the three buttons labeled S1, S2, or S3. S1 circuitry controls the dimming for LED1, LED2, and LED3; S2 circuitry controls the dimming for LED4 and LED5; and S3 circuitry controls the dimming for LED6. Each press of the button (pulse) dims the LEDs to the current level listed in Table 2. Due to the logarithmic response of the human eye, it takes several pulses to visually notice dimming. The 30th pulse reduces the current to 0.1mA. The 31st pulse sets the LED current back to 24mA.

If  dimming control is not required, EN\_ work as simple 100% brightness or off controls. See Table 3 for jumper settings when using EN\_. Drive EN\_ high to enable the LEDs, or drive EN\_ low to disable. The IC is shut down when all three EN\_ are low for 4ms or longer.

<!-- image -->

## MAX8648 Evaluation Kit

Table 2. MAX8648 Pulse-Dimming Steps vs. LED Currents

| MAX8648 PULSE-DIMMING STEPS   |   LED CURRENTS (mA) |
|-------------------------------|---------------------|
| Startup or EN_ high           |                  24 |
| 1                             |                22.4 |
| 2                             |                20.8 |
| 3                             |                19.2 |
| 4                             |                17.6 |
| 5                             |                  16 |
| 6                             |                14.4 |
| 7                             |                12.8 |
| 8                             |                11.2 |
| 9                             |                 9.6 |
| 10                            |                   8 |
| 11                            |                 6.4 |
| 12                            |                 5.6 |
| 13                            |                 4.8 |
| 14                            |                   4 |
| 15                            |                 3.2 |
| 16                            |                 2.8 |
| 17                            |                 2.4 |
| 18                            |                   2 |
| 19                            |                 1.6 |
| 20                            |                 1.4 |
| 21                            |                 1.2 |
| 22                            |                   1 |
| 23                            |                 0.8 |
| 24                            |                 0.7 |
| 25                            |                 0.6 |
| 26                            |                 0.5 |
| 27                            |                 0.4 |
| 28                            |                 0.3 |
| 29                            |                 0.2 |
| 30                            |                 0.1 |
| 31                            |                  24 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8648 Evaluation Kit

## Single-Wire Pulse Dimming Using External Pulse Generators

To use an external pulse generator, see Table 3 for proper jumper settings. Connect the external pulsegenerator output to ENA, ENB, or ENC to enable singlewire pulse dimming of the respective LEDs. The ground of the external pulse generator should be connected to the EV kit pad labeled GND. When EN\_ go high, the respective LEDs are enabled at full brightness. Each subsequent low-going pulse (1µs to 500µs pulse width) reduces the LED current, as shown in Table 2. The 30th pulse reduces current to 0.1mA. The 31st pulse sets the LED current back to 24mA. Figure 2 shows a timing diagram for single-wire pulse dimming.

## Using EN\_ I/O Pads Independently

When driving the I/O pads externally, observe the logic voltage levels. The input-high voltage is 1.4V (min) and the input-low voltage is 0.4V (max). The initial tHI, t SHDN,  tHI,  and  tLO timing,  shown in Figure 2, are still true when driving the I/O pads externally.

## Shutdown Mode

The MAX8648 shuts down when all three EN\_ are held low for 4ms or longer. In shutdown, NEG is pulled to GND with a 10k Ω internal resistor. See Table 4 for proper jumper settings.

Figure 2. EN\_ Serial Pulse-Dimming Timing Diagram

<!-- image -->

## Table 3. MAX8648 Jumper Connections for Different Evaluation Methods

|        | SHUNT POSITION              | SHUNT POSITION                    | SHUNT POSITION             |
|--------|-----------------------------|-----------------------------------|----------------------------|
| JUMPER | USING EV KIT PULSE CIRCUITS | USING JUMPERS FOR 100% BRIGHTNESS | USING ENA/ENB/ENC I/O PADS |
| JU1    | Pins 2-3                    | Open                              | Open                       |
| JU2    | Open                        | Pins 1-2                          | Open                       |
| JU3    | Pins 1-2                    | Open                              | Open                       |
| JU4    | Pins 2-3                    | Open                              | Open                       |
| JU5    | Open                        | Pins 1-2                          | Open                       |
| JU6    | Pins 1-2                    | Open                              | Open                       |
| JU7    | Pins 2-3                    | Open                              | Open                       |
| JU8    | Open                        | Pins 1-2                          | Open                       |
| JU9    | Pins 1-2                    | Open                              | Open                       |
| JU10   | Open                        | Open                              | Open                       |

## Table 4. MAX8648 Shutdown Table

|        | SHUNT POSITION              | SHUNT POSITION         |
|--------|-----------------------------|------------------------|
| JUMPER | USING EV KIT PULSE CIRCUITS | USING JUMPERS FROM EN_ |
| JU1    | Pins 2-3                    | Open                   |
| JU2    | Open                        | Pins 2-3               |
| JU3    | Pins 2-3                    | Open                   |
| JU4    | Pins 2-3                    | Open                   |
| JU5    | Open                        | Pins 2-3               |
| JU6    | Pins 2-3                    | Open                   |
| JU7    | Pins 2-3                    | Open                   |
| JU8    | Open                        | Pins 2-3               |
| JU9    | Pins 2-3                    | Open                   |
| JU10   | Open                        | Open                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## RGB Jumper Settings

To drive the RGB, move the shunt on jumper JU11 from pins 2-3 to pins 1-2. Also, shunt jumpers JU12, JU13, and JU14. Make all jumper settings prior to power-up. See Table 5 for proper jumper settings.

## Table 5. RGB Jumper Settings

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU11     | Pins 1-2         |
| JU12     | Shunted          |
| JU13     | Shunted          |
| JU14     | Shunted          |

## Evaluating the MAX8647

The MAX8648 EV kit can also evaluate the MAX8647 when using the CMAXQUSB+ command module. To evaluate the MAX8647, order the MAX8648 EV kit, the CMAXQUSB+ command module, and a free sample of the MAX8647ETE+. The CMAXQUSB+ command module is required for SMBus control of the MAX8647. The Windows ® 98SE/2000/XP-compatible EV software can be downloaded from the Maxim website (www.maximic.com/evkitsoftware).

Remove the MAX8648 from the MAX8648 EV kit and replace with the MAX8647. See Table 6 for proper jumper settings.

The MAX8647 EV kit software provides a graphical user interface (GUI) for exercising the MAX8647 features.

<!-- image -->

## MAX8648 Evaluation Kit

The Maxim CMAXQUSB+ command module provides the SMBus interface and is connected to the computer through the universal serial bus (USB) port.

## Using SDA, SCL, and VDD I/O Pads Independently

When driving the SDA, SCL, and VDD pads externally, observe all voltage and timing requirements described in the MAX8647/MAX8648 IC data sheet.

## Table 6. Jumper Connections for Evaluating the MAX8647

|        | SHUNT POSITION      | SHUNT POSITION             |
|--------|---------------------|----------------------------|
| JUMPER | USING THE CMAXQUSB+ | USING VDD/SDA/SCL I/O PADS |
| JU1    | Pins 1-2            | Open                       |
| JU2    | Open                | Open                       |
| JU3    | Open                | Open                       |
| JU4    | Pins 1-2            | Open                       |
| JU5    | Open                | Open                       |
| JU6    | Open                | Open                       |
| JU7    | Pins 1-2            | Open                       |
| JU8    | Open                | Open                       |
| JU9    | Open                | Open                       |
| JU10   | Shunted             | Open                       |

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8648 Evaluation Kit

## MAX8647 Quick Start

## Recommended Equipment

- MAX8648 EV kit with the MAX8647 IC installed
- CMAXQUSB+ command module (USB cable included)
- 5V power supply
- A user-supplied Windows 98SE/2000/XP computer with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that the jumpers on the MAX8648 EV kit, with the MAX8647 IC installed, are configured for use with the CMAXQUSB+, as shown in Table 6.
- 2) On the CMAXQUSB+ command module, ensure that the shunt on jumper JU1 is in the 3.3V position.
- 3) Connect the positive terminal of the DC power supply to the EV kit pad labeled VIN; connect the ground terminal to the GND pad.
- 4) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 8647Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 5) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The program files are copied and icons are created in the Windows Start | Programs menu.
- 6) Carefully connect the boards by aligning the 20-pin J1 connector of the MAX8648 EV kit with the 20-pin P3 header on the CMAXQUSB+ interface board. Gently press them together.
- 7) Connect  the  USB  cable  from  the  PC  to  the CMAXQUSB+ board. A Building Driver Database window pops up in addition to a New Hardware Found message if this is the first time the EV kit board is  connected to the PC. If you do not see a window that is similar to the one described above after 30 seconds, remove the USB cable from the CMAXQUSB+ and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000 and XP. Refer to the TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.
- 8) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX8647 (default installation directory) using the Browse button.
- 9) Start  the  MAX8647 EV kit software by opening its icon in the Start | Program menu.
- 10) Normal device operation is verified when MAX8647 device connected is displayed at the bottom of the MAX8647 EV kit window.

Note :  Once operational, the software enables all LEDs and configures ILED to 0.2mA. The device's actual power-on-reset state is ILED = 0mA.

## User-Interface Panel

The program's main window (Figure 3) provides controls  to  configure  the  LED  current  and  enable/disable each LED. When disabled, the LED current is effectively  set  to  0mA;  when  re-enabled, the LED current is restored to its previous setting. The slide bars are used to  adjust  the  LED  current,  which  is  displayed  to  the right of each section.

Figure 3. MAX8647 Software Main Window (MAX8647 IC Installed on the MAX8648 EV Kit)

<!-- image -->

The EV kit software also provides additional features in its  menu bar. The Options pulldown menu provides three current settings that, when selected, are applied to each LED. The settings are Power-on-Reset (0mA) , 2.8mA ,  and 24mA .  An Output option is also provided

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

in this menu, allowing the user to select either WLEDs or RGB as the output type. When RGB LED is selected, the LED2, LED3, and LED5 outputs are disabled. Only LED1, LED4, and LED6 are utilized when the output is an RGB LED. The LED output radio buttons provide an alternate method for selecting the output type.

The Help pulldown menu provides access to the software's Help document and version information. The Advanced pulldown  menu  opens  the Maxim Command Module Interface window that allows for low-level communication with the device. See the Simple SMBus Commands section for more details.

## MAX8648 Evaluation Kit

## Simple SMBus Commands

There are two methods for communicating with the MAX8647: through the normal user-interface panel (Figure 3), or through the SMBus commands available by selecting 2-wire Interface from the Advanced pulldown menu. The Maxim Command Module Interface window (Figure 4) pops up and includes a 2-wire interface tab that allows for execution of the SMBusSendByte() command. Refer to the MAX8647/

MAX8648 IC data sheet for command-byte format.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 4 for an illustration of this tool.

<!-- image -->

Figure 4. Maxim Command Module Interface Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8648 Evaluation Kit

Figure 5. MAX8648 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX8648 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8648 Evaluation Kit

Figure 7. MAX8648 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8648 Evaluation Kit

Figure 8. MAX8648 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Boblet