<!-- lastmod 2022-08-04 -->
## General Description

The MAX6974 evaluation kit (EV kit) is an assembled and tested printed circuit board (PCB) that demonstrates the MAX6974/ MAX6975 precision current-sinking, 24-output PWM LED drivers. The MAX6974/MAX6975 functionality can be evaluated using the MAX6974 EV kit. The MAX6975 has 14-bit individual PWM and 5-bit global PWM, while the MAX6974 has 12-bit individual PWM and 7-bit global PWM. The evaluation kit comes with a MAX6974ATL+ installed. The Windows ® 98/2000/XP software supports only the MAX6974.

Windows is a registered trademark of Microsoft Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| C1            |     1 | 100µF ±20%, 10V X5R capacitor (1812) TDK C4532X5R1A107M   |
| C2, C3        |     2 | 100µF ±20%,6.3V X5R capacitors (1210) TDKC3225X5R0J107M   |
| C4, C5, C25   |     3 | 10µF ±10%, 6.3V X5R capacitors (0603) TDK C1608X5R0J106K  |
| C6-C9         |     4 | 0.47µF±10%, 6.3V X5R capacitors (0402) TDKC1005X5R0J474K  |
| C10-C16       |     7 | 0.1µF ±10%, 6.3V X5R capacitors (0402) TDK C1005X5R0J104K |
| C17, C18      |     2 | 0.001µF ±10%,25VX5Rcapacitors(0402) TDKC1005X5R1E102K     |
| C19-C22       |     4 | 120pF ±5%, 25V C0G capacitors (0402) TDK C1005C0G1E121J   |
| C23, C24      |     2 | 10pF ±5%, 25V C0Gcapacitors (0402) TDK C1005C0G1E100J     |
| C26           |     1 | 0.01µF ±10%, 6.3V X5R capacitor (0402) TDK C1005X5R1E103K |
| D1-D32        |    32 | RGB LED modules Stanley URGB1308B-10-TF                   |
| J1            |     0 | Not installed                                             |
| J2            |     1 | 2 x 5 right-angle receptacle (0.1in)                      |
| J3            |     1 | 2 x 5 right-angle male header (0.1in)                     |
| J4            |     0 | Not installed                                             |

- ♦ Proven PCB Layout
- ♦ Complete Evaluation System
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested
- ♦ Multiplexed 4 x 8 RGB (96 LEDs Total) 20mA LED Matrix

## Ordering Information

| PART          | TYPE   | INTERFACE REQUIREMENTS             |
|---------------|--------|------------------------------------|
| MAX6974EVKIT+ | EV kit | Windows PC with RS-232 serial port |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| JU1-JU13      |    13 | 2-pin headers                                                              |
| JU14-JU20     |     7 | 3-pin headers                                                              |
| P1            |     1 | Female DB9 connector                                                       |
| Q1-Q4         |     4 | pnp transistors Zetex FMMTL717TA (SOT23)                                   |
| R1-R8         |     8 | 200 Ω ±1% resistors (0603)                                                 |
| R9-R12        |     4 | 182 Ω ±1% resistors (0603)                                                 |
| R13-R16       |     4 | 562 Ω ±1% resistors (0603)                                                 |
| R17           |     1 | 4.99k Ω ±1% resistor (0402)                                                |
| R18           |     1 | 9.53k Ω ±1% resistor (0402)                                                |
| R19           |     1 | 249k Ω ±1% resistor (0402)                                                 |
| R20           |     1 | 267k Ω ±1% resistor (0402)                                                 |
| TP1-TP10      |     0 | Not installed                                                              |
| U1, U2        |     2 | 24-output LED drivers Maxim MAX6974ATL+ (40-pin TQFN, 6mm x 6mm EP)        |
| U3            |     1 | Low-power microcontroller Maxim MAXQ2000-RAX+ (68-pin QFN, 10mm x 10mm EP) |
| U4            |     1 | Dual LVDS line driver Maxim MAX9112EKA+ (8-pin SOT23)                      |
| U5            |     1 | Dual LVDS line receiver Maxim MAX9113EKA+ (8-pin SOT23)                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX6974 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| U6            |     1 | RS-232 transceiver Maxim MAX3311EUB+ (10-pin µMAX ® ) |
| U7, U8        |     2 | LDO linear regulators Maxim MAX1658ESA+ (8-pin SO)    |
| U9            |     1 | LDO linear regulator Maxim MAX1659ESA+ (8-pin SO)     |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Procedure

## Do not turn on the power until all connections are complete.

- 1) Ensure that all jumpers JU1-JU20 are in 1-2 position (see Table 5).
- 2) Connect a 5VDC power source (7VDC maximum) to the board at the VLED and GND terminals.
- 3) Connect a cable from the computer's serial port to the EV kit. If using a 9-pin serial port, use a straightthrough, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin-to-9-pin adapter is required.
- 4) Install the evaluation software on your computer by launching MAX6974.msi. (The latest software can be found on Maxim's website www.maxim-ic.com.) The program files are copied and icons are created for them in the Windows Start menu.

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                               |
|---------------|-------|-------------------------------------------|
| Y1            |     1 | 20MHz crystal Citizen HCM49-20.000MABJ-UT |
| Y2            |     1 | 32MHz oscillator ECS ECS-3953M-320-B-TR   |
| -             |     1 | PCB: MAX6974 evaluation kit+              |
| -             |    20 | Shunts                                    |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK Corp.  | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Zetex USA  | 631-543-7100 | 631-864-7630 | www.zetex.com         |

Note: Indicate that you are using the MAX6974 when contacting these component suppliers.

## Quick Start

## Required Equipment

Before you begin, you need the following equipment:

- Maxim MAX6974EVKIT
- DC power supply, 5VDC at 1A
- Windows 98/2000/XP-compatible computer with a serial (COM) port
- 9-pin I/O extension cable
- 5) Turn on the power supply. None of the LEDs light up at this time.
- 6) Start the MAX6974 program by opening its icon in the Start menu.
- 7) In the Select Maxim MAX6974 Evaluation Kit Software Mode window, select Connect to EVKit on port (Autodetect) . Click OK . See Figure 1. Verify that the blue M test pattern appears (test\_0\_blue\_M.clr).
- 8) From the File menu, select Load Test Patterns... and then pick the file test\_01\_all\_white.clr .  Verify that all 32 RGB LEDs light up in white.
- 9) In  the LED0 color grid,  double-click one of the large round color dots in the 4 x 8 grid (or select one of the dots and click OK ).  The  standard color selector dialog box appears. Select a color and click OK .  Click Upload All to  write  the  4  x  8  color grid data to the board. Verify that the LEDs light up in  colors  corresponding to the software color grid settings.
- 10) Set Global Intensity to 5/63 and click Upload All . Verify that the LEDs are brighter.

Detailed Description of Software The MAX6974 EV kit software controls one or more MAX6974 EV kit boards, each of which has two MAX6974s driving a 4 x 8 grid of LEDs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Universal Options

The Cascaded Boards control must be set to the number of boards that are connected.

When Multiplexing is disabled, only the left half of the 4 x 8 grid is driven. See the Detailed Description of Hardware section .

Clicking the Upload Control Command Only button writes the control command to all cascaded MAX6974s (see Figure 2). Refer to the MAX6974/MAX6975 data sheet Commands section, Table 15.

## Individual Board Options

The Individual Board Options controls apply to the two MAX6974s on the selected board. If using a single EV kit board, leave Select Board set at 1. See the Cascading Boards section.

The Board Calibration controls determine the peak LED current for each group of output ports. Because the LEDs used on the EV kit board are only rated for 20mA, setting the calibration controls to a value greater than about 50/255 can exceed the LED's rated drive current, causing permanent damage to the LED.

The 4 x 8 grid of circles inside Board LED Colors corresponds to the 4 x 8 grid of LEDs on the EV kit board. These can be individually selected by clicking them with the mouse. The Change… button chooses the color of the single selected LED. Clicking the Change All button sets all 32 LEDs to a chosen color.

## Upload All

Clicking the Upload All button writes universal and individual board options to all cascaded MAX6974s.

## File-Load Test Patterns

Pressing the key combination Ctrl+T brings up a convenient window containing a list of test pattern files (see Figure 3). All files whose names begin with 'test\_' and end with '.clr' are listed as test patterns. Click on a filename from the list, and the chroma pattern is i mmediately  loaded.  For  example,  test  pattern test\_921\_ 2boards\_all\_white.clr loads a master and one slave board with a 4 x 16 pattern where all of the LEDs are on. The test pattern default.clr is loaded at startup.

## Disabling LED Multiplexing

As shipped from the factory, the 4 x 8 grid of tricolor LEDs is multiplexed. To disable multiplexing, and drive only the left 4 x 4 half of the grid, two steps are necessary. First, jumpers JU1-JU6 and JU19 and JU20 must be reconfigured. See Table 5. Second, the Multiplexing must be set to Disabled in Universal Options .

<!-- image -->

## MAX6974 Evaluation Kit

## Cascading Boards

Two or more MAX6974 EV kit boards can be connected together in a master-slave configuration, using the master/slave connectors, J2 and J3.

- 1) With power off, connect the J3 pins of one board to the J2 socket of the next board.
- 2) The board on the left is the master. On the master board, set the JU14-JU18 shunts to position 1-2. On all other boards, set the JU14-JU18 shunts to position 2-3.
- 3) The board on the right is the last slave. On the last slave board, set the JU10-JU13 shunts closed. On all other boards, remove the JU10-JU13 shunts.
- 4) Connect 5VDC power to the master board, between the VLED and GND pads.
- 5) Connect a cable from the computer's serial port to the master board. If using a 9-pin serial port, use a straight-through, 9-pin, female-to-male cable.
- 6) Install the evaluation software on your computer by launching MAX6974.msi. The program files are copied and icons are created for them in the Windows Start menu.
- 7) Turn on the power supply. None of the LEDs light up at this time.
- 8) Start the MAX6974 program by opening its icon in the Windows Start menu.
- 9) In  the Select Maxim MAX6974 Evaluation Kit Software Mode window, select Connect to EVKit on port (Autodetect) . See Figure 1. Click OK .
- 10) Set the software's Cascaded Boards to 2 , 3 , 4 ,  or 5 , depending on the number of boards used.
- 11) Set the software's Select Board to  1  to  work  with the master board.
- 12) In the Board 1 LED Colors grid, double-click one of  the  large  round  color  dots  in  the  4  x  8  grid  (or select one of the dots and click OK ). The standard color selector dialog box appears. Select a color and click OK .
- 13) Click Upload All to write the 4 x 8 color grid data to the board. Verify that the LEDs light up in colors corresponding to the software color grid settings.
- 14) Set Board 1 Global Intensity to 5/63 and click Upload All . Verify that the LEDs are brighter.
- 15) Set the software's Select Board to  2  to  work  with the next board, and repeat the process of setting LED colors, global intensity, and upload all.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6974 Evaluation Kit

## Slideshow Demo

The EV kit software can load a sequence of test patterns.  From the Command menu, select Slideshow , then choose a folder containing test pattern files (see Figure 4). The time between patterns can be adjusted between 50ms and 30s.

## Detailed Description of Hardware

The MAX6974 precision current-sinking, 24-output PWM LED drivers (U1, U2) drive a 4 x 8 multiplexed grid of red-green-blue LEDs in the common-anode configuration.  Common-emitter pnp BJTs (Q1-Q4) switch the LED supply voltage in the multiplexing configuration. See Tables 1 and 2.

## Table 1. LED Nonmultiplexing

| IC/PORT   | LED DEVICES DRIVEN   | COLORS   |
|-----------|----------------------|----------|
| U1 port R | D1 to D8             | Red      |
| U1 port G | D1 to D8             | Green    |
| U2 port R | D9 to D16            | Red      |
| U2 port G | D9 to D16            | Green    |
| U1 port B | D1 to D8             | Blue     |
| U2 port B | D9 to D16            | Blue     |

## Table 2. LED Multiplexing

| IC/PORT   | LED DEVICES DRIVEN   | COLORS   |
|-----------|----------------------|----------|
| U1 port R | D1 to D8             | Red      |
| U1 port R | D17 to D24           | Red      |
| U1 port G | D1 to D8             | Green    |
| U1 port G | D17 to D24           | Green    |
| U2 port R | D9 to D16            | Red      |
| U2 port R | D25 to D32           | Red      |
| U2 port G | D9 to D16            | Green    |
| U2 port G | D25 to D32           | Green    |
| U1 port B | D1 to D8             | Blue     |
| U1 port B | D9 to D16            | Blue     |
| U2 port B | D17 to D24           | Blue     |
| U2 port B | D25 to D32           | Blue     |

User-supplied DC power between 5V and 7V, applied between the VLED and GND pads, is regulated by three MAX1658/MAX1659 low-dropout linear regulators (U7, U8, and U9) to produce 5V, 3.3V, and 2.5V supply rails.

The  MAXQ2000 microcontroller (U3) drives  the MAX9112 LVDS level shifter (U4). When JU14-JU18 are in  the  1-2  position,  this  microcontroller drives the MAX6974 LED display drivers (U1, U2). A 32MHz crystal oscillator (Y2) is used to demonstrate optimum PWM frequency by driving the LVDS clock signal between command sequences. During command sequences, the MAXQ2000 bit bangs the LVDS clock at 2.8MHz.

When used with the software, the MAX3311 (U6) translates the RS-232 signal levels from the COM port (P1) to logic-level  signals.  Resistor-dividers  R17/R18 convert the 5V logic output into 3.3V logic.

When JU14-JU18 are in the 2-3 position, external LVDS signals must be applied to connector J2. In this slave configuration, the MAXQ2000 (U3), MAX9112 (U4), and MAX3311 (U6) are not used.

## LED Power Dissipation

Peak LED current is set by each port's LED current calibration register.  This  8-bit  DAC  allows  peak  LED  current  to  be  reduced  to  between  20% and 100% of the full-scale  rating,  30mA.  Setting  the  current  calibration register  to  a  value  of  0  limits  the  peak  LED  current  to 6mA (20% of 30mA). By writing different values to the red, green, and blue ports' current calibration registers, the display's color balance can be adjusted to compensate for LED efficacy variations.

The evaluation kit is shipped from the factory with an LED type (Stanley URGB1308B) that has a maximum rating of 20mA forward current or 84mW power dissipation.

## Evaluating the MAX6975

The MAX6974 EV kit's software and firmware are only capable of driving 12-bit PWM values. If the EV kit were used to drive the MAX6975s instead, then the two least significant  bits  of  the  individual  pixel  PWM  values  are not accessible. See Tables 3 and 4.

## Table 3. Device ComparisonNonmultiplexed Operation

| MAX6974     | MAX6975     | OPERATION                                                 |
|-------------|-------------|-----------------------------------------------------------|
| 7 bits      | 5 bits      | Global-intensity control PWMresolution                    |
| 3 (R, G, B) | 3 (R, G, B) | Number of LED current calibration registers               |
| 8 bits      | 8 bits      | LED current calibration resolution                        |
| 30mA        | 30mA        | Maximum LED drive current (LED current calibration = 255) |
| 6mA         | 6mA         | LED drive current (LED current calibration = 0)           |
| 24          | 24          | Number of pixels                                          |
| 12 bits     | 14 bits     | Individual pixel PWM-intensity-control resolution         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 4. Device ComparisonMultiplexed Operation

| MAX6974     | MAX6975     | OPERATION                                                 |
|-------------|-------------|-----------------------------------------------------------|
| 6 bits      | 4 bits      | Global-intensity control PWMresolution                    |
| 3 (R, G, B) | 3 (R, G, B) | Number of LED current calibration registers               |
| 8 bits      | 8 bits      | LED current calibration resolution                        |
| 30mA        | 30mA        | Maximum LED drive current (LED current calibration = 255) |
| 6mA         | 6mA         | LED drive current (LED current calibration = 0)           |
| 48          | 48          | Number of pixels                                          |
| 12 bits     | 14 bits     | Individual pixel PWM-intensity-control resolution         |

Table 5. Jumper Functions Table

| JUMPER   | PINS    | FUNCTION                                 |
|----------|---------|------------------------------------------|
| JU1      | Closed* | Enables LED multiplexing.                |
| JU1      | Open    | Disables LED multiplexing.               |
| JU2      | Closed* | Enables LED multiplexing.                |
| JU2      | Open    | Disables LED multiplexing.               |
| JU3      | Closed* | Enables LED multiplexing.                |
| JU3      | Open    | Disables LED multiplexing.               |
| JU4      | Closed* | Enables LED multiplexing.                |
| JU4      | Open    | Disables LED multiplexing.               |
| JU5      | Closed* | Enables LED multiplexing.                |
| JU5      | Open    | Disables LED multiplexing.               |
| JU6      | Closed* | Enables LED multiplexing.                |
| JU6      | Open    | Disables LED multiplexing.               |
| JU7      | Closed* | Normal operation.                        |
| JU7      | Open    | Force LED D1 red open fault condition.   |
| JU8      | Closed* | Normal operation.                        |
| JU8      | Open    | Force LED D1 green open fault condition. |
| JU9      | Closed* | Normal operation.                        |
| JU9      | Open    | Force LED D1 blue open fault condition.  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6974 Evaluation Kit

## MAX6974 Evaluation Kit

## Table 5. Jumper Functions Table (continued)

| JUMPER   | PINS    | FUNCTION                                                        |
|----------|---------|-----------------------------------------------------------------|
| JU10     | Closed* | Single board mode: R9 terminates CLKO; nothing connects to J3.  |
| JU10     | Open    | No CLKO termination, allowing slave board to connect to J3.     |
| JU11     | Closed* | Single board mode: R9 terminates CLKO; nothing connects to J3.  |
| JU11     | Open    | No CLKO termination, allowing slave board to connect to J3.     |
| JU12     | Closed* | Single board mode: R10 terminates DOUT; nothing connects to J3. |
| JU12     | Open    | No DOUT termination, allowing slave board to connect to J3.     |
| JU13     | Closed* | Single board mode: R10 terminates DOUT; nothing connects to J3. |
| JU13     | Open    | No DOUT termination, allowing slave board to connect to J3.     |
| JU14     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU14     | 2-3     | Slave mode; driven by another MAX6974 EV kit connected to J2.   |
| JU14     | Open    | Not valid. Do not use.                                          |
| JU15     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU15     | 2-3     | Slave mode; driven by another MAX6974 EV kit connected to J2.   |
| JU15     | Open    | Not valid. Do not use.                                          |
| JU16     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU16     | 2-3     | Slave mode; driven by another MAX6974 EV kit connected to J2.   |
| JU16     | Open    | Not valid. Do not use.                                          |
| JU17     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU17     | 2-3     | Slave mode; driven by another MAX6974 EV kit connected to J2.   |
| JU17     | Open    | Not valid. Do not use.                                          |
| JU18     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU18     | 2-3     | Slave mode; driven by another MAX6974 EV kit connected to J2.   |
| JU18     | Open    | Not valid. Do not use.                                          |
| JU19     | 1-2*    | Enables LED multiplexing.                                       |
| JU19     | 2-3     | Disables LED multiplexing.                                      |
| JU19     | Open    | Not valid. Do not use.                                          |
| JU20     | 1-2*    | Enables LED multiplexing.                                       |
| JU20     | 2-3     | Disables LED multiplexing.                                      |
| JU20     | Open    | Not valid. Do not use.                                          |

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. Select Maxim MAX6974 EV Kit Software Mode Screenshot

<!-- image -->

Figure 2. MAX6974 EV Kit-Connected to COM1 Main Window Screenshot

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6974 Evaluation Kit

Figure 3. Click to Upload Color Test Pattern Screenshot

<!-- image -->

Figure 4. Slideshow Screenshot

<!-- image -->

## MAX6974 Evaluation Kit

Figure 5a. MAX6974 EV Kit Schematic (Sheet 1 of 5)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6974 Evaluation Kit

Figure 5b. MAX6974 EV Kit Schematic (Sheet 2 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6974 Evaluation Kit

Figure 5c. MAX6974 EV Kit Schematic (Sheet 3 of 5)

<!-- image -->

| D19-A PR2_A D19-B PG2_A D19-C PB2_A   | PR4_A D21-B PG4_A D21-C PB4_A D22-A PR5_A D22-B PG5_A D22-C PB5_A D23-A PR6_A D23-B PG6_A D23-C PB6_A PR0_B PVMUX1_B D25-B PG0_B PVMUX1_B D25-C PB0_B PVMUX1_B D26-A PR1_B PVMUX1_B D26-B PG1_B PVMUX1_B D26-C PB1_B PVMUX1_B D27-A PR2_B PVMUX1_B D27-B PG2_B PVMUX1_B D27-C PB2_B PVMUX1_B   |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6974 Evaluation Kit

Figure 5d. MAX6974 EV Kit Schematic (Sheet 4 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6974 Evaluation Kit

Figure 5e. MAX6974 EV Kit Schematic (Sheet 5 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6974 Evaluation Kit

<!-- image -->

Figure 6. MAX6974 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6974 Evaluation Kit

Figure 7. MAX6974 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6974 Evaluation Kit

<!-- image -->

Figure 8. MAX6974 EV Kit PCB Layout-Ground Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6974 Evaluation Kit

Figure 9. MAX6974 EV Kit PCB Layout-Signal Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6974 Evaluation Kit

Figure 10. MAX6974 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 2, 8-12, 14-17

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 17

Springer