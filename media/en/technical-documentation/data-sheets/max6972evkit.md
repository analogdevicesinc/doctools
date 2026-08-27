<!-- lastmod 2022-08-04 -->
## General Description

The MAX6972 evaluation kit (EV kit) is an assembled and tested circuit board that demonstrates the MAX6972/ MAX6973 precision current-sinking, 16-output PWM LED drivers. The MAX6972/MAX6973 functionality can be evaluated using the MAX6972 EV kit. The MAX6973 has 14-bit individual PWM and 5-bit global PWM, while the MAX6972 has 12-bit individual PWM and 7-bit global PWM. The evaluation kit comes with a MAX6972ATJ+ installed.  The Windows ® 98/2000/XP software supports only the MAX6972.

Windows is a registered trademark of Microsoft Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| C1            |     1 | 100µF ±20%, 10V X5R capacitor (1812) TDK C4532X5R1A107M   |
| C2            |     1 | 100µF ±20%, 6.3V X5R capacitor (1210) TDK C3225X5R0J107M  |
| C3-C6, C30    |     5 | 10µF ±10%, 6.3V X5R capacitors (0603) TDK C1608X5R0J106K  |
| C7-C12        |     6 | 0.47µF±10%, 6.3V X5R capacitors (0402) TDKC1005X5R0J474K  |
| C13-C19       |     7 | 0.1µF ±10%, 6.3V X5R capacitors (0402) TDK C1005X5R0J104K |
| C20, C21      |     2 | 0.001µF ±10%,25VX5Rcapacitors(0402) TDKC1005X5R1E102K     |
| C22-C27       |     6 | 120pF ±5%, 25V C0G capacitors (0402) TDK C1005C0G1E121J   |
| C28, C29      |     2 | 10pF ±5%, 25V C0Gcapacitors (0402) TDK C1005C0G1E100J     |
| C31           |     1 | 0.01µF ±10%, 6.3V X5R capacitor (0402) TDK C1005X5R1E103K |
| D1-D32        |    32 | RGB LED modules Stanley URGB1308B                         |
| J1            |     0 | Not installed                                             |
| J2            |     1 | 2 x 5 right-angle receptacle (0.1in)                      |
| J3            |     1 | 2 x 5 right-angle male header (0.1in)                     |
| J4            |     0 | Not installed                                             |

- ♦ Proven PC Board Layout
- ♦ Complete Evaluation System
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested
- ♦ Multiplexed 4 x 8 RGB (96 LEDs Total) 20mA LED Matrix

## Ordering Information

| PART         | TYPE   | INTERFACE REQUIREMENTS             |
|--------------|--------|------------------------------------|
| MAX6972EVKIT | EV kit | Windows PC with RS-232 serial port |

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                               |
|----------------------------|-------|---------------------------------------------------------------------------|
| JU1-JU13, JU22, JU23, JU24 |    16 | 2-pin headers                                                             |
| JU14-JU21                  |     8 | 3-pin headers                                                             |
| P1                         |     1 | Female DB9 connector                                                      |
| Q1-Q6                      |     6 | pnp transistors Zetex FMMTL717 (SOT23)                                    |
| R1-R10                     |    10 | 200 Ω ±1% resistors (0603)                                                |
| R11-R16                    |     6 | 182 Ω ±1% resistors (0603)                                                |
| R17-R22                    |     6 | 562 Ω ±1% resistors (0603)                                                |
| R23                        |     1 | 4.99k Ω ±1% resistor (0402)                                               |
| R24                        |     1 | 9.53k Ω ±1% resistor (0402)                                               |
| R25                        |     1 | 267k Ω ±1% resistor (0402)                                                |
| R26                        |     1 | 249k Ω ±1% resistor (0402)                                                |
| TP1-TP10                   |     0 | Not installed                                                             |
| U1, U2, U3                 |     3 | 16-output LED drivers Maxim MAX6972ATJ+ (32-pin TQFN, 5mm x 5mm EP)       |
| U4                         |     1 | Low-power microcontroller Maxim MAXQ2000-RAX (68-pin QFN, 10mm x 10mm EP) |
| U5                         |     1 | Dual LVDS line driver Maxim MAX9112EKA (8-pin SOT23)                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

## MAX6972 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| U6            |     1 | Dual LVDS line receiver Maxim MAX9113EKA (8-pin SOT23) |
| U7            |     1 | RS-232 transceiver Maxim MAX3311EUB (10-pin µMAX ® )   |
| U8, U9        |     2 | LDO linear regulators Maxim MAX1658ESA (8-pin SO)      |
| U10           |     1 | LDO linear regulator Maxim MAX1659ESA (8-pin SO)       |

## Procedure

## Do not turn on the power until all connections are complete.

- 1) Ensure that all jumpers JU1-JU24 are in 1-2 position (see Table 5).
- 2) Connect a 5VDC power source (7VDC maximum) to the board at the VLED and GND terminals.
- 3) Connect a cable from the computer's serial port to the EV kit. If using a 9-pin serial port, use a straightthrough, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin-to-9-pin adapter is required.
- 4) Install the evaluation software on your computer by launching MAX6972.msi. (The latest software can be found on Maxim's website www.maxim-ic.com.) The program files are copied and icons are created for them in the Windows Start menu.

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                             |
|---------------|-------|-----------------------------------------|
| Y1            |     1 | 20MHz crystal Citizen HCM49-20.000MABJ  |
| Y2            |     1 | 32MHz oscillator ECS ECS-3953M-320-B-TR |
| -             |     1 | MAX6972 EV kit PC board                 |
| -             |    24 | Shunts                                  |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Zetex USA  | 631-543-7100 | 631-864-7630 | www.zetex.com         |

Note: Indicate that you are using the MAX6972 when contacting these component suppliers.

## Quick Start

## Required Equipment

Before you begin, you need the following equipment:

- Maxim MAX6972EVKIT
- DC power supply, 5VDC at 1A
- Windows 98/2000/XP-compatible computer with a serial (COM) port
- 9-pin I/O extension cable
- 5) Turn on the power supply. None of the LEDs light up at this time.
- 6) Start the MAX6972 program by opening its icon in the Start menu.
- 7) In the Select Maxim MAX6972 Evaluation Kit Software Mode window, select Connect to EVKit on port (Autodetect) . Click OK . See Figure 1. Verify that the blue M test pattern appears (test\_0\_blue\_M.clr).
- 8) From the File menu, select Load Test Patterns... and then pick the file test\_01\_all\_white.clr .  Verify that all 32 RGB LEDs light up in white.
- 9) In  the LED0 color grid,  double-click one of the large round color dots in the 4 x 8 grid (or select one of the dots and click OK ).  The  standard color selector dialog box appears. Select a color and click OK .  Click Upload All to  write  the  4  x  8  color grid data to the board. Verify that the LEDs light up in  colors  corresponding to the software color grid settings.
- 10) Set Global Intensity to 5/63 and click Upload All . Verify that the LEDs are brighter.

## Detailed Description of Software

The MAX6972 EV kit software controls one or more MAX6972 EV kit boards, each of which has three MAX6972s driving a 4 x 8 grid of LEDs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Universal Options

The Cascaded Boards control must be set to the number of boards that are connected.

When Multiplexing is disabled, only the left half of the 4 x 8 grid is driven. See the Detailed Description of Hardware section .

Clicking the Upload Control Command Only button writes the control command to all cascaded MAX6972s (see Figure 2). Refer to the MAX6972/MAX6973 data sheet Commands section.

## Individual Board Options

The Individual Board Options controls apply to the three MAX6972s on the selected board. If using a single EV kit board, leave Select Board set at 1. See the Cascading Boards section.

The Board Calibration controls determine the peak LED current for each group of output ports. Because the LEDs used on the EV kit board are only rated for 20mA, setting the calibration controls to a value greater than about 50/255 can exceed the LED's rated drive current, causing permanent damage to the LED.

The 4 x 8 grid of circles inside Board LED Colors corresponds to the 4 x 8 grid of LEDs on the EV kit board. These can be individually selected by clicking them with the mouse. The Change… button chooses the color of the single selected LED. Clicking the Change All button sets all 32 LEDs to a chosen color.

## Upload All

Clicking the Upload All button writes universal and individual board options to all cascaded MAX6972s.

## File-Load Test Patterns

Pressing the key combination Ctrl+T brings up a convenient window containing a list of test pattern files (see Figure 3). All files whose names begin with 'test\_' and end with '.clr' are listed as test patterns. Click on a filename from the list, and the chroma pattern is i mmediately  loaded.  For  example,  test  pattern test\_921\_ 2boards\_all\_white.clr loads a master and one slave board with a 4 x 16 pattern where all of the LEDs are on. The test pattern default.clr is loaded at startup.

## Disabling LED Multiplexing

As shipped from the factory, the 4 x 8 grid of tricolor LEDs is multiplexed. To disable multiplexing, and drive only the left 4 x 4 half of the grid, two steps are necessary. First, jumpers JU1-JU6 and JU19-JU24 must be reconfigured. See Table 5. Second, the Multiplexing must be set to Disabled in Universal Options .

<!-- image -->

## MAX6972 Evaluation Kit

## Cascading Boards

Two or more MAX6972 EV kit boards can be connected together in a master-slave configuration, using the master/slave connectors, J2 and J3.

- 1) With power off, connect the J3 pins of one board to the J2 socket of the next board.
- 2) The board on the left is the master. On the master board, set the JU14-JU18 shunts to position 1-2. On all other boards, set the JU14-JU18 shunts to position 2-3.
- 3) The board on the right is the last slave. On the last slave board, set the JU10-JU13 shunts closed. On all other boards, remove the JU10-JU13 shunts.
- 4) Connect 5VDC power to the master board, between the VLED and GND pads.
- 5) Connect a cable from the computer's serial port to the master board. If using a 9-pin serial port, use a straight-through, 9-pin, female-to-male cable.
- 6) Install the evaluation software on your computer by launching MAX6972.msi. The program files are copied and icons are created for them in the Windows Start menu.
- 7) Turn on the power supply. None of the LEDs light up at this time.
- 8) Start the MAX6972 program by opening its icon in the Windows Start menu.
- 9) In  the Select Maxim MAX6972 Evaluation Kit Software Mode window, select Connect to EVKit on port (Autodetect) . See Figure 1. Click OK .
- 10) Set the software's Cascaded Boards to 2 , 3 , 4 ,  or 5 , depending on the number of boards used.
- 11) Set the software's Select Board to  1  to  work  with the master board.
- 12) In the Board 1 LED Colors grid, double-click one of  the  large  round  color  dots  in  the  4  x  8  grid  (or select one of the dots and click OK ). The standard color selector dialog box appears. Select a color and click OK .
- 13) Click Upload All to write the 4 x 8 color grid data to the board. Verify that the LEDs light up in colors corresponding to the software color grid settings.
- 14) Set Board 1 Global Intensity to 5/63 and click Upload All . Verify that the LEDs are brighter.
- 15) Set the software's Select Board to  2  to  work  with the next board, and repeat the process of setting LED colors, global intensity, and upload all.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6972 Evaluation Kit

## Slideshow Demo

The EV kit software can load a sequence of test patterns.  From the Command menu, select Slideshow , then choose a folder containing test pattern files (see Figure 4). The time between patterns can be adjusted between 50ms and 30s.

## Detailed Description of Hardware

The MAX6972 precision current-sinking, 16-output PWM LED drivers (U1, U2, and U3) drive a 4 x 8 multiplexed grid of red-green-blue LEDs in the common-anode configuration. Common-emitter pnp BJTs (Q1-Q6) switch the LED supply voltage in the multiplexing configuration. Because the blue LEDs require the closest output-current matching, one device drives all the blue LEDs, and the other devices multiplex between red and green. See Tables 1 and 2.

## Table 1. LED Nonmultiplexing

| IC/PORT   | LED DEVICES DRIVEN   | COLORS   |
|-----------|----------------------|----------|
| U1 port Y | D1 to D8             | Red      |
| U1 port Z | D1 to D8             | Green    |
| U2 port Y | D9 to D16            | Red      |
| U2 port Z | D9 to D16            | Green    |
| U3 port Y | D1 to D8             | Blue     |
| U3 port Z | D9 to D16            | Blue     |

## Table 2. LED Multiplexing

| IC/PORT   | LED DEVICES DRIVEN   | COLORS   |
|-----------|----------------------|----------|
| U1 port Y | D1 to D8             | Red      |
| U1 port Y | D17 to D24           | Red      |
| U1 port Z | D1 to D8             | Green    |
| U1 port Z | D17 to D24           | Green    |
| U2 port Y | D9 to D16            | Red      |
| U2 port Y | D25 to D32           | Red      |
| U2 port Z | D9 to D16            | Green    |
| U2 port Z | D25 to D32           | Green    |
| U3 port Y | D1 to D8             | Blue     |
| U3 port Y | D9 to D16            | Blue     |
| U3 port Z | D17 to D24           | Blue     |
| U3 port Z | D25 to D32           | Blue     |

User-supplied DC power between 5V and 7V, applied between the VLED and GND pads, is regulated by three MAX1658/MAX1659 low-dropout linear regulators (U8, U9, and U10) to produce 5V, 3.3V, and 2.5V supply rails.

The  MAXQ2000 microcontroller (U4) drives  the MAX9112 LVDS level shifter (U5). When JU14-JU18 are in  the  1-2  position,  this  microcontroller drives the MAX6972 LED display drivers (U1, U2, and U3). A 32MHz crystal oscillator (Y2) is used to demonstrate optimum PWM frequency by driving the LVDS clock signal between command sequences. During command sequences, the MAXQ2000 bit bangs the LVDS clock at 2.8MHz.

When used with the software, the MAX3311 (U7) translates the RS-232 signal levels from the COM port (P1) to logic-level  signals.  Resistor-dividers  R23/R24 convert the 5V logic output into 3.3V logic.

When JU14-JU18 are in the 2-3 position, external LVDS signals must be applied to connector J2. In this slave configuration, the MAXQ2000 (U4), MAX9112 (U5), and MAX3311 (U7) are not used.

## LED Power Dissipation

Peak LED current is set by each port's LED current calibration register.  This  8-bit  DAC  allows  peak  LED  current  to  be  reduced  to  between  20% and 100% of the full-scale  rating,  55mA.  Setting  the  current  calibration register  to  a  value  of  0  limits  the  peak  LED  current  to 11mA (20% of 55mA). By writing different values to the red, green, and blue ports' current calibration registers, the display's color balance can be adjusted to compensate for LED efficacy variations.

The evaluation kit is shipped from the factory with an LED type (Stanley URGB1308B) that has a maximum rating of 20mA forward current or 84mW power dissipation.

## Evaluating the MAX6973

The MAX6972 EV kit's software and firmware are only capable of driving 12-bit PWM values. If the EV kit were used to drive the MAX6973s instead, then the two least significant  bits  of  the  individual  pixel  PWM  values  are not accessible. See Tables 3 and 4.

## Table 3. Device ComparisonNonmultiplexed Operation

| MAX6972   | MAX6973   | OPERATION                                                 |
|-----------|-----------|-----------------------------------------------------------|
| 7 bits    | 5 bits    | Global-intensity control PWMresolution                    |
| 2 (Y, Z)  | 2 (Y, Z)  | Number of LED current calibration registers               |
| 8 bits    | 8 bits    | LED current calibration resolution                        |
| 55mA      | 55mA      | Maximum LED drive current (LED current calibration = 255) |
| 11mA      | 11mA      | LED drive current (LED current calibration = 0)           |
| 16        | 16        | Number of pixels                                          |
| 12 bits   | 14 bits   | Individual pixel PWM-intensity-control resolution         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 4. Device ComparisonMultiplexed Operation

| MAX6972   | MAX6973   | OPERATION                                                 |
|-----------|-----------|-----------------------------------------------------------|
| 6 bits    | 4 bits    | Global-intensity control PWMresolution                    |
| 2 (Y, Z)  | 2 (Y, Z)  | Number of LED current calibration registers               |
| 8 bits    | 8 bits    | LED current calibration resolution                        |
| 55mA      | 55mA      | Maximum LED drive current (LED current calibration = 255) |
| 11mA      | 11mA      | LED drive current (LED current calibration = 0)           |
| 32        | 32        | Number of pixels                                          |
| 12 bits   | 14 bits   | Individual pixel PWM-intensity-control resolution         |

Table 5. Jumper Functions Table

| JUMPER   | PINS    | FUNCTION                                                       |
|----------|---------|----------------------------------------------------------------|
| JU1      | Closed* | Enables LED multiplexing.                                      |
| JU1      | Open    | Disables LED multiplexing.                                     |
| JU2      | Closed* | Enables LED multiplexing.                                      |
| JU2      | Open    | Disables LED multiplexing.                                     |
| JU3      | Closed* | Enables LED multiplexing.                                      |
| JU3      | Open    | Disables LED multiplexing.                                     |
| JU4      | Closed* | Enables LED multiplexing.                                      |
| JU4      | Open    | Disables LED multiplexing.                                     |
| JU5      | Closed* | Enables LED multiplexing.                                      |
| JU5      | Open    | Disables LED multiplexing.                                     |
| JU6      | Closed* | Enables LED multiplexing.                                      |
| JU6      | Open    | Disables LED multiplexing.                                     |
| JU7      | Closed* | Normal operation.                                              |
| JU7      | Open    | Force LED D1 red open fault condition.                         |
| JU8      | Closed* | Normal operation.                                              |
| JU8      | Open    | Force LED D1 green open fault condition.                       |
| JU9      | Closed* | Normal operation.                                              |
| JU9      | Open    | Force LED D1 blue open fault condition.                        |
| JU10     | Closed* | Single board mode: R9 terminates CLKO; nothing connects to J3. |
| JU10     | Open    | No CLKO termination, allowing slave board to connect to J3.    |
| JU11     | Closed* | Single board mode: R9 terminates CLKO; nothing connects to J3. |
| JU11     | Open    | No CLKO termination, allowing slave board to connect to J3.    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6972 Evaluation Kit

## MAX6972 Evaluation Kit

## Table 5. Jumper Functions Table (continued)

| JUMPER   | PINS    | FUNCTION                                                        |
|----------|---------|-----------------------------------------------------------------|
| JU12     | Closed* | Single board mode: R10 terminates DOUT; nothing connects to J3. |
| JU12     | Open    | No DOUT termination, allowing slave board to connect to J3.     |
| JU13     | Closed* | Single board mode: R10 terminates DOUT; nothing connects to J3. |
| JU13     | Open    | No DOUT termination, allowing slave board to connect to J3.     |
| JU14     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU14     | 2-3     | Slave mode; driven by another MAX6972 EV kit connected to J2.   |
| JU14     | Open    | Not valid. Do not use.                                          |
| JU15     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU15     | 2-3     | Slave mode; driven by another MAX6972 EV kit connected to J2.   |
| JU15     | Open    | Not valid. Do not use.                                          |
| JU16     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU16     | 2-3     | Slave mode; driven by another MAX6972 EV kit connected to J2.   |
| JU16     | Open    | Not valid. Do not use.                                          |
| JU17     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU17     | 2-3     | Slave mode; driven by another MAX6972 EV kit connected to J2.   |
| JU17     | Open    | Not valid. Do not use.                                          |
| JU18     | 1-2*    | Master mode; nothing connects to J2.                            |
| JU18     | 2-3     | Slave mode; driven by another MAX6972 EV kit connected to J2.   |
| JU18     | Open    | Not valid. Do not use.                                          |
| JU19     | 1-2*    | Enables LED multiplexing.                                       |
| JU19     | 2-3     | Disables LED multiplexing.                                      |
| JU19     | Open    | Not valid. Do not use.                                          |
| JU20     | 1-2*    | Enables LED multiplexing.                                       |
| JU20     | 2-3     | Disables LED multiplexing.                                      |
| JU20     | Open    | Not valid. Do not use.                                          |
| JU21     | 1-2*    | Enables LED multiplexing.                                       |
| JU21     | 2-3     | Disables LED multiplexing.                                      |
| JU21     | Open    | Not valid. Do not use.                                          |
| JU22     | Closed* | Enables LED multiplexing.                                       |
| JU22     | Open    | Disables LED multiplexing.                                      |
| JU23     | Closed* | Enables LED multiplexing.                                       |
| JU23     | Open    | Disables LED multiplexing.                                      |
| JU24     | Closed* | Enables LED multiplexing.                                       |
| JU24     | Open    | Disables LED multiplexing.                                      |

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. Select Maxim MAX6972 EV Kit Software Mode Screenshot

<!-- image -->

Figure 2. MAX6972 EV Kit-Connected to COM1 Main Window Screenshot

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6972 Evaluation Kit

Figure 3. Click to Upload Color Test Pattern Screenshot

<!-- image -->

Figure 4. Demo Mode Screenshot

<!-- image -->

## MAX6972 Evaluation Kit

Figure 5. MAX6972 EV Kit Schematic (Sheet 1 of 5)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6972 Evaluation Kit

Figure 5. MAX6972 EV Kit Schematic (Sheet 2 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6972 Evaluation Kit

Figure 5. MAX6972 EV Kit Schematic (Sheet 3 of 5)

<!-- image -->

| D19-A PY2_A PVMUX1_A D19-B PZ2_A PVMUX1_A D19-C PY2_C PVMUX1_C D13-A PY4_B D13-B PZ4_B D13-C PZ4_C   | D22-A PY5_A PVMUX1_A D22-B PZ5_A PVMUX1_A D22-C PY5_C PVMUX1_C D23-A PY6_A PVMUX1_A D23-B PZ6_A PVMUX1_A D23-C PY6_C PVMUX1_C D26-A PY1_B PVMUX1_B D26-B PZ1_B PVMUX1_B D26-C PZ1_C PVMUX1_C D27-A PY2_B PVMUX1_B D27-B PZ2_B PVMUX1_B D27-C PZ2_C PVMUX1_C D16-A PY7_B D16-B PZ7_B D16-C PZ7_C D17-A PY0_A D17-B PZ0_A D17-C PY0_C D18-A PY1_A D18-B   |
|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6972 Evaluation Kit

<!-- image -->

Figure 5. MAX6972 EV Kit Schematic (Sheet 4 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6972 Evaluation Kit

Figure 5. MAX6972 EV Kit Schematic (Sheet 5 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6972 Evaluation Kit

<!-- image -->

Figure 6. MAX6972 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6972 Evaluation Kit

Figure 7. MAX6972 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6972 Evaluation Kit

Figure 8. MAX6972 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Springer

15