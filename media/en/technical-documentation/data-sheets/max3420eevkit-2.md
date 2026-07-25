<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3420E evaluation kit-2 (EV kit-2) provides a proven design to evaluate the MAX3420E USB peripheral controller with SPI™ interface. The EV kit-2 board is jumper-connected to an Atmel ® ATtiny2313 microcontroller by default, but can also be connected to  any  SPI  master.  The MAX3420E EV kit-2 adds USB functionality to any microcontroller, microprocessor, DSP, CPLD, FPGA, or ASIC with an SPI master interface or five GPIO lines can connect to the MAX3420E EV kit-2.

The EV kit-2 board comes with the MAX3420EECJ+ installed.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| Murata     | 770-436-1300 | www.murata.com        |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX3420E when contacting these component suppliers.

| DESIGNATION    |   QTY | DESCRIPTION                                                                          |
|----------------|-------|--------------------------------------------------------------------------------------|
| C1, C7         |     2 | 2.2µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225K or C1608X5R0J225M  |
| C2, C3, C6, C8 |     4 | 1µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J105K or C1608X5R0J105M    |
| C4, C5         |     2 | 18pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H180J TDK C1005C0G1H180J |
| D1-D4          |     4 | Green LEDs (0603) Stanley Electric BG1111C-TR Panasonic LNJ314G8TRA or LNJ308G84RA   |
| D5             |     1 | Red LED (0603) Panasonic LNJ208R8ARA                                                 |
| H1             |     1 | Dual-row, 20-pin (2 x 10) header                                                     |
| H2             |     1 | Single-row, 8-pin header                                                             |
| H3             |     1 | Dual-row, 6-pin (2 x 3) header                                                       |

Atmel is a registered trademark of Atmel Corp.

## Features

- ♦ Complies with USB 2.0 (Full Speed)
- ♦ Custom USB Drivers Not Required
- ♦ USB Powered
- ♦ USB Power LED Indicator
- ♦ USB Cable Included
- ♦ On-Board ATtiny2313 Microcontroller
- ♦ Four GPI Port-Connected Pushbuttons
- ♦ Four GPO Port LED Indicators
- ♦ 20-Pin Signal Header to Connect the MAX3420E to Any Microcontroller
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART NUMBER      | TYPE   | PC INTERFACE   |
|------------------|--------|----------------|
| MAX3420EEVKIT-2+ | EV kit | USB            |

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                              |
|---------------------|-------|--------------------------------------------------------------------------|
| JU1-JU5, JU10, JU11 |     7 | 3-pin headers                                                            |
| JU6-JU9             |     4 | 2-pin headers                                                            |
| P1                  |     1 | USB type B right-angle receptacle Assmann AU-Y1007-R                     |
| R1, R2              |     2 | 33.2 Ω ±1% resistors (0603) (use lead-free parts only)                   |
| R3, R6-R9           |     5 | 150 Ω ±5% resistors (0603) (use lead-free parts only)                    |
| R4, R5              |     2 | 10k Ω ±5% resistors (0603) (use lead-free parts only)                    |
| SW1-SW4             |     4 | Pushbutton switches Panasonic EQV-PHP03T                                 |
| TP1, TP2, TP3       |     3 | Mini test points (black) Keystone Electronics 5001                       |
| U1                  |     1 | MAX3420EECJ+ USB peripheral controller (32-pin, 7mm x 7mm x 1.4mm, TQFP) |

## MAX3420E Evaluation Kit-2

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| U2            |     1 | MAX6349TLUT+ (SOT23-6) Topmark AAJQ                                  |
| U3            |     1 | 20MHz 8-bit RISC microcontroller Atmel ATtiny2313-20SU (20-pin SOIC) |

## Quick Start

## Recommended Equipment

- MAX3420 EV kit-2 (USB cable included)
- A user-supplied Windows ® 2000/XP PC with spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows 2000/XP operating system.

## Procedure

The MAX3420E EV kit-2 is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Verify that all jumpers (JU1-JU11) are in the default 1-2 position.
- 2) Connect the included USB cable from the PC's USB port (Type A) to the USB connector (Type B) on the MAX3420E EV kit-2 board.
- 3) Verify that the red USB power LED (D5) lights up.
- 4) Verify that the green port 0 LED (D1) blinks.

Figure 1. Found New Hardware | Demo Window

<!-- image -->

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| Y1            |     1 | 12MHz crystal; 18pF load (HCM49 SMD case) Citizen HCM49-12.000MABJ-UT |
| -             |    11 | Shunts                                                                |
| -             |     4 | Rubber bumps                                                          |
| -             |     1 | MAX3420EEVKIT-2+ PCB                                                  |

- 5) A Found New Hardware | Demo window appears after  plugging in the USB cable for the first time (Figure 1). Windows 2000 or higher is required.
- 6) Next, a Found New Hardware | USB Human Interface Device appears, as shown in Figure 2. The standard Windows USB HID driver is installed automatically.
- 7) Open WordPad by clicking on the WordPad icon located at Start | Programs | Accessories | WordPad . Caution: Make sure that WordPad or a similar  editor  (e.g.,  Notepad)  is  the  active  window before performing the next step (the demonstration program types text into whatever window is open).
- 8) Press the port 3 pushbutton switch (SW4) to start the HID keyboard emulator.
- 9) Verify that the HID keyboard emulator automatically writes text into the active WordPad editor.
- 10) Stop the HID keyboard emulator by pressing the port  3  pushbutton switch (SW4) again. The port 3 pushbutton starts and stops the emulator.

<!-- image -->

## MAX3420E Evaluation Kit-2

Figure 2. Found New Hardware | USB Human Interface Device Window

<!-- image -->

## Detailed Description of Hardware

Tables 1 and 2 describe the function of each pushbutton and LED during the HID keyboard emulator demo. Tables 3 through 6 explain the functionality of each jumper on the MAX3420E EV kit-2.

Tables 7 through 9 give the pin descriptions for headers H1, H2, and H3. H2 is a header consisting of SPI test points. H3 is a header designed to be connected to one of two Atmel tools. The JTAGICE-2 can connect to this header to load and debug ATtiny2313 code using the AVR Studio® software, available on the Atmel website.  Additionally,  an  AVRISP-2 can be connected to program any hex file into the ATtiny2313. Refer to the Atmel documentation for further details.

The example firmware code for the HID keyboard emulator may be downloaded at www.maxim-ic.com/evkitsoftware. Double click the MAX3420E EVKIT Firmware link.

## Table 1. Pushbutton Descriptions for HID Keyboard Emulator Demo

|   PORT | PUSHBUTTON   | DESCRIPTION                                     |
|--------|--------------|-------------------------------------------------|
|      0 | SW1          | Not used                                        |
|      1 | SW2          | Not used                                        |
|      2 | SW3          | Not used                                        |
|      3 | SW4          | Starts and stops sending characters as keyboard |

## Table 2. LED Descriptions for HID Keyboard Emulator Demo

|   PORT | LED   | DESCRIPTION                                                             |
|--------|-------|-------------------------------------------------------------------------|
|      0 | D1    | Blinks to show program is running                                       |
|      1 | D2    | MAX3420E detected a USB bus reset                                       |
|      2 | D3    | SUSPEND (PC stopped USB activity)                                       |
|      3 | D4    | SEND light (toggles when the pushbutton on GPO port 3 (SW4) is pressed) |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3420E Evaluation Kit-2

## Table 3. SPI Bus Selection (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                     |
|----------|------------------|-------------------------------------------------|
| JU1      | 1-2*             | INT line connected to the ATtiny2313 INT line   |
| JU1      | 2-3              | INT line connected to H1-2                      |
| JU2      | 1-2*             | SS line connected to the ATtiny2313 SS line     |
| JU2      | 2-3              | SS line connected to H1-6                       |
| JU3      | 1-2*             | MOSI line connected to the ATtiny2313 MOSI line |
| JU3      | 2-3              | MOSI line connected to H1-4                     |
| JU4      | 1-2*             | MISO line connected to the ATtiny2313 MISO line |
| JU4      | 2-3              | MISO line connected to H1-3                     |
| JU5      | 1-2*             | SCLK line connected to the ATtiny2313 SCLK line |
| JU5      | 2-3              | SCLK line connected to H1-5                     |

*Default position.

## Table 4. GPO 0-3 LED Connection (JU6-JU9)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                      |
|----------|------------------|----------------------------------|
| JU6      | 1-2*             | GPO port 3 LED (D4) connected    |
| JU6      | Open             | GPO port 3 LED (D4) disconnected |
| JU7      | 1-2*             | GPO port 2 LED (D3) connected    |
| JU7      | Open             | GPO port 2 LED (D3) disconnected |
| JU8      | 1-2*             | GPO port 1 LED (D2) connected    |
| JU8      | Open             | GPO port 1 LED (D2) disconnected |
| JU9      | 1-2*             | GPO port 0 LED (D1) connected    |
| JU9      | Open             | GPO port 0 LED (D1) disconnected |

*Default position.

## Table 5. VL Logic-Supply Selection (VL)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                       |
|----------|------------------|-----------------------------------|
| JU10     | 1-2*             | Logic-supply voltage (V L = 3.3V) |
| JU10     | 2-3              | Do not use                        |
| JU10     | Open             | Apply V L supply on H1-9          |

*Default position.

Table 6. Power-Supply Source Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                 |
|----------|------------------|---------------------------------------------|
| JU11     | 1-2*             | EV kit-2 board powered by USB               |
| JU11     | 2-3              | Do not use                                  |
| JU11     | Open             | Apply 5V supply on JU11-2 and GND on JU11-3 |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 7. Header H1 Pin Description

|   PIN | NAME    | DESCRIPTION                                  |
|-------|---------|----------------------------------------------|
|     1 | GPX     | GPX line                                     |
|     2 | CONINT  | Interrupt (INT) Line (Note 1)                |
|     3 | CONMISO | Master In Slave Out (MISO) Line (Note 2)     |
|     4 | CONMOSI | Master Out Slave In (MOSI) Line (Note 3)     |
|     5 | CONSCLK | Serial Clock (SCLK) Line (Note 4)            |
|     6 | CON SS  | Active-Low Slave Select ( SS ) Line (Note 5) |
|     7 | GPO3    | General-Purpose Output 3 (Note 6)            |
|     8 | RES     | Active-Low Reset Line                        |
|     9 | V L     | Logic-Voltage-Supply Line                    |
|    10 | GPO2    | General-Purpose Output 2 (Note 6)            |
|    11 | GND     | Ground                                       |
|    12 | GND     | Ground                                       |
|    13 | GPO0    | General-Purpose Output 0 (Note 6)            |
|    14 | GPO1    | General-Purpose Output 1 (Note 6)            |
|    15 | GPI2    | General-Purpose Input 2 (Note 7)             |
|    16 | GPI3    | General-Purpose Input 3 (Note 7)             |
|    17 | GPI0    | General-Purpose Input 0 (Note 7)             |
|    18 | GPI1    | General-Purpose Input 1 (Note 7)             |
|    19 | 3.3V    | 3.3V EV Kit-2 Board Supply                   |
|    20 | GND     | Ground                                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3420E Evaluation Kit-2

## MAX3420E Evaluation Kit-2

## Table 8. Header H2 Pin Description (SPI Test Points)

|   PIN | NAME   | DESCRIPTION                         |
|-------|--------|-------------------------------------|
|     1 | -      | -                                   |
|     2 | GPX    | GPX line                            |
|     3 | MOSI   | Master Out Slave In (MOSI) Line     |
|     4 | MISO   | Master In Slave Out (MISO) Line     |
|     5 | SS     | Active-Low Slave Select ( SS ) Line |
|     6 | SCLK   | Serial-Clock (SCLK) Line            |
|     7 | INT    | Interrupt (INT) Line                |
|     8 | GND    | Ground                              |

## Table 9. Header H3 Pin Description (ISP Connector)

|   PIN | NAME   | DESCRIPTION                                |
|-------|--------|--------------------------------------------|
|     1 | ATMISO | ATtiny2313 Master In Slave Out (MISO) Line |
|     2 | 3.3V   | 3.3V EV Kit-2 Board Supply                 |
|     3 | ATSCLK | ATtiny2313 Serial-Clock (SCLK) Line        |
|     4 | ATMOSI | ATtiny2313 Master Out Slave In (MOSI) Line |
|     5 | DRES   | Debug Reset Line                           |
|     6 | GND    | Ground                                     |

Note: When using the Atmel AVRISP-2 to download hex files for AtTiny2313 programming, remove jumpers JU2-JU5 to avoid any signal interference with the MAX3420E.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3420E Evaluation Kit-2

<!-- image -->

Figure 3. MAX3420E EV Kit-2 Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3420E Evaluation Kit-2

Figure 4. MAX3420E EV Kit-2 Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3420E Evaluation Kit-2

<!-- image -->

Figure 5. MAX3420E EV Kit-2 PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3420E Evaluation Kit-2

Figure 6. MAX3420E EV Kit-2 PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600