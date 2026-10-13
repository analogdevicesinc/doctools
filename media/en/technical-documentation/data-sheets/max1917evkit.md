<!-- lastmod 2022-08-04 -->
## General Description

The MAX1917 evaluation kit (EV kit) demonstrates the MAX1917's standard 7A application circuit. This DC-DC converter provides a complete power-management solution  for  DDR memory. This EV kit is a fully assembled and tested circuit board. The MAX1917 EV kit generates a regulated voltage for VTT and VTTR that is half the voltage at the DDR input. The input voltage range is 2.5V to 14V. The circuit is configured to deliver 7A of output current. The DC-DC converter uses buck topology with synchronous rectification to achieve low output voltage with greater than 90% efficiency. The converter output is capable of sourcing and sinking current. Sink capabilities at low voltage arise from the use of a synchronous rectifier, which allows the inductor current to reverse. The EV kit operates at 550kHz switching frequency and has superior load-transient response that meets JEDEC specifications for DDR memory.

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 10µF, 25V X5R ceramic capacitors (1812) Taiyo Yuden TMK432BJ106KM or TDK C4532X5R1E106M  |
| C4, C5        |     0 | Not installed, E case                                                                    |
| C6-C9         |     4 | 270µF, 2V, 15m Ω low-ESR specialty polymer capacitors, E case Panasonic EEFUE0E271R      |
| C10, C11      |     2 | 10µF, 6.3V X5R ceramic capacitors (1206) Taiyo Yuden JMK212BJ106MG or TDK C3216X5R0J106M |
| C12           |     1 | 0.47µF, 25V X5R ceramic capacitor (1206) Taiyo Yuden TMK316BJ474ML                       |
| C13, C14      |     2 | 0.47µF, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107BJ474MA                     |
| C15           |     1 | 4.7µF, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ475MG                       |
| C16, C17      |     2 | 1µF, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107BJ105MA                        |
| D1            |     1 | 100mA Schottky diode Central Semiconductor CMPSH-3                                       |
| J1            |     1 | Scope probe connector Berg Electronics 33JR135-1                                         |
| JU1           |     1 | 3-pin header                                                                             |

<!-- image -->

## Features

- ♦ Automatically Sets VTT and VTTR to 1/2 VDDR
- ♦ ±1% Output Voltage Accuracy
- ♦ 2.5V to 14V Input Voltage Range
- ♦ 7A Output Current Capability
- ♦ Sourcing and Sinking Current
- ♦ 550kHz Switching Frequency
- ♦ 16-Pin QSOP Package
- ♦ Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1917EVKIT | 0°C to +70°C | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| JU2, JU3      |     2 | 2-pin headers                                                      |
| JU4           |     1 | Not installed                                                      |
| L1            |     1 | 0.8µH, 16A power inductor Sumida CDEP105L-0R8                      |
| N1, N2        |     2 | N-channel MOSFETs (8-pin SO) International Rectifier IRF7811W      |
| Q1            |     1 | N-channel MOSFET (SOT23) Central Semiconductor 2N7002              |
| Q2            |     0 | Not installed, complementary P-N MOSFETs (SC-89) Siliconix Si1029X |
| R1, R5, R7    |     0 | Not installed (0805)                                               |
| R2            |     1 | 5.1k Ω ±5% resistor (0805)                                         |
| R3            |     1 | 100k Ω ±5% resistor (0805)                                         |
| R4            |     1 | 0.002 Ω ±1%, 1W resistor (2512) Panasonic ERJM1WTF2M0U             |
| R6            |     1 | 10k Ω ±5% resistor (0805)                                          |
| R8            |     0 | Not installed (short PC trace) (0805)                              |
| R9            |     1 | 20 Ω ±5% resistor (0805)                                           |
| U1            |     1 | MAX1917EEE (16-pin QSOP)                                           |
| None          |     3 | Shunts                                                             |
| None          |     4 | Rubber bumpers 3M SJ-5007 Mouser 517-SJ-5007BK or equivalent       |
| None          |     1 | MAX1917 PC board                                                   |
| None          |     1 | MAX1917 data sheet                                                 |
| None          |     1 | MAX1917 EV kit data sheet                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1917 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Central Semiconductor   | 516-435-1110 | 516-435-1824 | www.centralsemi.com   |
| International Rectifier | 310-322-3331 | 310-322-3332 | www.irf.com           |
| Panasonic               | 714-373-7334 | 714-373-7323 | www.panasonic.com     |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 | www.t-yuden.com       |
| TDK                     | 847-390-4373 | 847-390-4428 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1917 when contacting these component suppliers.

## Quick Start

The following equipment is needed:

- 2.5V to 14V power supply (VIN), battery, or notebook AC adapter
- DC-bias power supply (V+), 5.5V to 14V at 100mA
- Dummy load capable of sourcing/sinking 7A
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope

The MAX1917 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 2) Verify that the shunts are across JU1 pins 2 and 3, JU2, and JU3, and not JU4.
- 3) Apply external reference to the DDR pad.
- 4) Turn on power supplies and observe the output with the DMM and/or oscilloscope. Look at the LX switching node and MOSFET gate-drive signals while varying the load current.

## Detailed Description

The MAX1917 EV kit provides a complete power-management solution for DDR memory. The EV kit is a synchronous, buck-switching, DC-DC converter that generates half the voltage at the DDR input pad for VTT and VTTR. The synchronous rectification mode ensures balanced sourcing and sinking current capability up to 7A. The EV kit operates at 550kHz switching frequency and has superior line- and load-transient response.

Tables 1-4 show jumper settings.

Table 1. Jumper JU1 Functions (POK)

| SHUNT LOCATION   | POK PIN                                        |
|------------------|------------------------------------------------|
| 1 and 2          | Connected to VLOGIC through pullup resistor R3 |
| 2 and 3          | Connected to VL through pullup resistor R3     |

## Table 2. Jumper JU2 Functions (Switching-Frequency Selection)

| JU2           | FSEL PIN         | FREQUENCY (kHz)   |
|---------------|------------------|-------------------|
| Not Installed | Floating         | 300               |
| Installed     | Connected to GND | 550 (as shipped)  |

## Table 3. Jumper JU3 Functions (Fixed/ Adjustable Current-Limit Selection)

| SHUNT LOCATION   | ILIM PIN                                                                                                                                                                                  | CURRENT-LIMIT THRESHOLD   |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| ON               | Connected to VL.                                                                                                                                                                          | 100mV (default)           |
| OFF              | C onnected to GN D thr oug h r esi stor R1 ( not p r ovi d ed ) . Refer to the Over cur r ent P r otecti on secti on i n the M AX 1917 d ata sheet for i nfor m ati on on sel ecti ng R1. | Adjustable current limit  |

## Table 4. Jumper JU4 Functions (V+)

| SHUNT LOCATION   | V+ PIN              | V+ VOLTAGE RANGE (V)   |
|------------------|---------------------|------------------------|
| ON               | Connected to VL     | 4.5 to 5.5             |
| OFF              | Not connected to VL | 5.5 to 14              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Jumper Settings

## MAX1917 Evaluation Kit

<!-- image -->

Figure 1. MAX1917 EV Kit Schematic

<!-- image -->

MXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX1917

## MAX1917 Evaluation Kit

<!-- image -->

Figure 2. MAX1917EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1917 EV Kit PC Board Layout-Ground Plane

Figure 3. MAX1917 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1917 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600