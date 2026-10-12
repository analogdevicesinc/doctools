<!-- lastmod 2022-08-04 -->
## General Description

The MAX8727 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a pulse-width-modulated (PWM) step-up DC-DC converter.  The  EV  kit  is  configured  to  operate  with  a  1.2MHz switching frequency. It operates from a 2.6V to 5.5V DC supply voltage, is configured for a 15V output, and can provide 600mA with a 4.5V input.

The MAX8727 EV kit features low quiescent current and high conversion efficiency (90%). The high switching frequency allows for the use of small surface-mount components.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1            |     0 | Not installed, ceramic capacitor (0805)                                                       |
| C2            |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J106K Taiyo Yuden JMK212BJ106K   |
| C3            |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J105K                             |
| C4            |     1 | 0.033µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E333K                          |
| C5            |     1 | 330pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H331K                            |
| C6            |     1 | 39pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H390J Taiyo Yuden UMK107CG390JZ    |
| C7, C8, C9    |     3 | 4.7µF ±20%, 25V X7R ceramic capacitors (1206) Murata GRM31CR71E475M Taiyo Yuden TMK316BJ475KL |

## MAXIM

- ♦ 90% Efficiency
- ♦ 2.6V to 5.5V Input Range
- ♦ 15V Output Voltage (Adjustable from VIN to 24V)
- ♦ 600mA Output Current (4.5V Input)
- ♦ 1.2MHz Switching Frequency (Selectable: 640kHz or 1.2MHz)
- ♦ Programmable Soft-Start
- ♦ 0.1µA IC Shutdown Current (typ)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX8727EVKIT | 0°C to +70°C | 10 TDFN (3mm x 3mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| C10           |     1 | 100µF ±20%, 6.3V aluminum electrolytic capacitor (SMT: 6.3mm x 6.0mm) Sanyo 6CV100AX |
| D1            |     1 | 3A, 30V Schottky diode (M-flat) Toshiba CMS02                                        |
| JU1           |     1 | 2-pin header                                                                         |
| JU2           |     0 | Not installed, 3-pin header                                                          |
| L1            |     1 | 3.6µH ±30%, 3.5A power inductor Sumida CDR7D28MNNP-3R6                               |
| R1            |     1 | 309k Ω ±1% resistor (0603)                                                           |
| R2            |     1 | 28.0k Ω ±1% resistor (0603)                                                          |
| R3, R4        |     2 | 100k Ω ±5% resistors (0603)                                                          |
| R5            |     0 | N ot i nstal l ed ; shor t b y P C tr ace ( 0603)                                    |
| U1            |     1 | MAX8727ETB+ (10-pin TDFN 3mm x 3mm) (top mark AMV)                                   |
| -             |     1 | Shunt                                                                                |
| -             |     1 | MAX8727 EV kit PC board                                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX8727 Evaluation Kit

## Recommended Equipment

- 2.6V to 5.5V, 5A DC power supply (VIN)
- Voltmeter

## Quick Start

The MAX8727 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify  that  there  is  no  shunt  placed  across  jumper JU1 to enable the MAX8727.
- 2) Connect the positive terminal of the DC power supply to  the  VIN  pad. Connect the negative terminal of the DC power supply to the GND pad above the VIN pad.
- 3) Connect the voltmeter across the VOUT and GND pads.
- 4) Turn on the 2.6V to 5.5V DC power supply and verify that the output is 15V.

## Detailed Description

The MAX8727 EV kit contains a high-efficiency, PWM step-up DC-DC converter. The MAX8727 features a programmable soft-start, loop compensation pin, and an internal MOSFET switch. The EV kit operates from a 2.6V to 5.5V DC power supply, provides a regulated 15V output, and is capable of providing a 600mA load current with a 4.5V input. The EV kit is configured for a 5V input, a 15V output, and a 1.2MHz switching frequency. Operation at a different input voltage, output voltage, or switching frequency may require a different inductor, output capacitor, and compensation components. Refer to the MAX8727 data sheet for detailed information on loop compensation and component selection.

## Jumper Selection

## Shutdown Mode ( SHDN )

The EV kit features a shutdown mode that reduces the MAX8727 quiescent current. JU1 selects the shutdown mode. See Table 1 for jumper JU1 functions.

## Switching-Frequency Selection (FREQ)

The MAX8727 EV kit provides the option to configure the switching frequency of the step-up DC-DC converter. Table 2 lists jumper JU2 settings for configuring the switching frequency. The EV kit is configured and shipped to operate at 1.2MHz. For operation at 640kHz, cut the trace between pins 1 and 2 of jumper JU2 and short pins 2 and 3. Refer to the MAX8727 data sheet for selecting the proper components.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION          | SHDN PIN                    | MAX8727 OUTPUT                        |
|-------------------------|-----------------------------|---------------------------------------|
| Installed               | Connected to GND            | Shutdown mode, V OUT = V IN - V DIODE |
| Not installed (default) | Connected to VIN through R4 | MAX8727 enabled, V OUT = 15V          |

## Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | FREQ PIN                                                                   | SWITCHING FREQUENCY   |
|------------------|----------------------------------------------------------------------------|-----------------------|
| 1-2 (default)    | Connected to VIN with a PC trace                                           | 1.2MHz                |
| 2-3              | Connected to GND (cut the trace between pins 1-2 before shorting pins 2-3) | 640kHz                |

## Evaluating Other Output Voltages

The EV kit is configured to provide a 15V output voltage. However, the output voltage can be adjusted from VIN to 24V by selecting appropriate R1 and R2 values. Select R2 in the 10k Ω to 50k Ω range. R1 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.24V. For significantly different operation points, the EV kit may require a different inductor and component changes. Refer to the MAX8727 data sheet for proper component selection.

<!-- image -->

## MAX8727 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE              |
|-------------|--------------|--------------|----------------------|
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com       |
| Sanyo       | 619-661-4134 | 619-661-1055 | www.sanyovideo.com   |
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com       |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 | www.t-yuden.com      |
| Toshiba     | 949-455-2000 | 949-859-3963 | www.toshiba.com/taec |

Note: Indicate that you are using the MAX8727 when contacting these suppliers.

<!-- image -->

Figure 1. MAX8727 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8727 Evaluation Kit

<!-- image -->

Figure 2. MAX8727 EV Kit Component Placement GuideComponent Side

Figure 3. MAX8727 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8727 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600