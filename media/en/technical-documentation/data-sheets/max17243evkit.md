<!-- lastmod 2022-08-02 -->
## MAX17243 Evaluation Kit with

## Preset 5V/3A Output

## General Description

The MAX17243 evaluation kit (EV kit) demonstrates the MAX17243  high-voltage,  current-mode  step-down  converters  with  low  operating  current.  The  EV  kit  operates over a wide 5.6V to 36V input range and the output is set for 5V at 3A.

The EV kit comes with the MAX17243ATPA/V+ installed.

## Features

- Wide 5.6V to 36V Input Supply Range
- Forced-PWM or Skip-Mode Operation
- Programmable Switching Frequency (2.2MHz Default)
- Power-Good Output
- 4-Layer 2oz Copper
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

-  MAX17243EV	kit
- 14V,	2A	DC	power	supply
- Electronic	load	capable	of	3A
- Digital	voltmeter	(DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on supplies until all connections are made.

- 1)  Verify that jumpers JU1-JU4 are in their default positions, as shown in Tables 1-4.
- 2)  Connect  the  power  supply  between  the  VINSUPSW and nearest PGND test points.
- 3)  Connect the 3A electronic load between the OUT and nearest PGND test points.
- 4)  Connect  the  DVM  between  the  OUT  and  nearest PGND test points.
- 5)  Turn on the power supply.
- 6)  Enable the electronic load.
- 7)  Verify that the voltage at the OUT test point is approximately 5V.

Evaluates: MAX17243

## Table 1. EN Configuration (JU1)

| SHUNT POSITION   | EN PIN            | MODE             |
|------------------|-------------------|------------------|
| 1-2*             | Connected to SUP  | Normal Operation |
| 2-3              | Connected to PGND | Shutdown Mode    |

## Table 2. Operating-Mode and Frequency Control (JU2)

| SHUNT POSITION   | FSYNC PIN                      | MODE                                                |
|------------------|--------------------------------|-----------------------------------------------------|
| 1-2*             | Connected to BIAS              | Forced-PWM mode                                     |
| 2-3              | Connected to AGND              | Skip mode                                           |
| Not installed**  | Connected to an external clock | Forced-PWM mode (device syncs to an external clock) |

## Table 3. Spread Spectrum (JU3)

| SHUNT POSITION   | SPS PIN           | MODE                     |
|------------------|-------------------|--------------------------|
| 1-2*             | Connected to BIAS | Spread-Spectrum Enabled  |
| 2-3              | Connected to AGND | Spread-Spectrum Disabled |

## Table 4. PGOOD (JU4)

| SHUNT POSITION   | MODE                      |
|------------------|---------------------------|
| Installed*       | PGOOD pulled high to BIAS |
| Not installed    | PGOOD unconnected         |

<!-- image -->

## MAX17243 Evaluation Kit with Preset 5V/3A Output

## Detailed Description of Hardware

The MAX17243EV kit demonstrates the MAX17243 highvoltage,  high-frequency,  step-down  converter  with  low operating current. The EV kit operates over a wide 5.6V to 36V input range and the output is set for 5V at 3A. For 24V  to  36V  operation  forced  air  cooling  must  be  used. Consider thermal and switching efficiency when designing for operation in this input voltage range.

## Enable (EN)

Place a shunt in the 1-2 position on JU1 for normal operation. To place the device into shutdown mode, move the shunt on JU1 to the 2-3 position.

## Synchronization Input (FSYNC)

The  EV  kit  features  JU2  to  control  the  synchronization input  (FSYNC). The device synchronizes to an external signal  applied  to  FSYNC.  Connect  FSYNC  to AGND to enable  skip-mode  operation.  Connect  to  BIAS  or  to  an external  clock  to  enable  fixed-frequency  forced-PWM mode operation.

To  use  an  external  clock,  uninstall  the  shunt  on  JU2  and apply the signal at the FSYNC test point and AGND. The external clock frequency at FSYNC can be higher or lower than the internal clock by 20%. Ensure that the duty cycle of the external clock used has a minimum 100ns pulse width.

## Spread-Spectrum Option (SPS)

The  EV  kit  provides  JU3  that  allows  SPS  to  be  pulled high  (BIAS)  or  pulled  low  (AGND).  Connect    SPS high  to  enable  spread  spectrum    where  the  operating frequency  is  varied  ±3%  centered  on  FOSC.  Connect SPS low  to disable the spread-spectrum feature.

## Setting the Switching Frequency (FOSC)

The EV kit switches at 2.2MHz by default, and the switching frequency is set by a resistor, R FOSC  (R4), connected from FOSC to AGND. Refer to TOC08 in the Typical  Operating Characteristics section of the MAX17243 IC data sheet for the correct R FOSC  (R4) value.

## Evaluates: MAX17243

## Power-Good Output (PGOOD)

The  EV  kit  provides  a  PGOOD  test  point  to  monitor  the status of the device output. PGOOD asserts when V OUT rises  above  95%  of  its  regulation  voltage.  PGOOD deasserts when V OUT  drops below 92.5% of its regulation voltage.  R5  pulls  PGOOD  up  to  BIAS  with  respect  to AGND.

## Output

Resistor R6 connects FB to BIAS for a fixed +5V (EV kit default output) or a fixed +3.3V output voltage. To set the output to other voltages between 1V and 10V, connect a resistive divider from output (OUT) to FB to AGND. Use the following equation to determine the R7 and R8 of the resistive divider network:

<!-- formula-not-decoded -->

where V FB =	1V	and	R8	is	≤	500kΩ.

## Operation at 400kHz Switching Frequency

For 400kHz switching frequency, the following components must be changed to:

- R4	=	73.2kΩ
- L1 = 6.8µH (recommend Coilcraft XAL5050-682MEB)
- R1	=			16.5kΩ
- C10 = 4,700pF
- C11 = 6.8pF

Additional  capacitance  on  C7  and  C8  may  be  needed, depending on transient performance.

│

## MAX17243 Evaluation Kit with Preset 5V/3A Output

## Component Suppliers

| SUPPLIER                       | WEBSITE           |
|--------------------------------|-------------------|
| Coilcraft Inc.                 | www.coilcraft.com |
| Murata Americas                | www.murata.com    |
| Panasonic Corp.                | www.panasonic.com |
| Würth Electronik GmbH & Co. KG | www.we-online.com |
| TDK Corporation                | www.tdk.com       |

Note:

Indicate that you are using the MAX17243 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematics

See the following links for component information, PCB layout diagrams, and schematics.

- MAX17243 EV BOM
- MAX17243 EV PCB Layout
- MAX17243 EV Schematic
- MAX17243 EV Minimal Component Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17243EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17243

│

## MAX17243 Evaluation Kit with Preset 5V/3A Output

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Ma[im	,ntegrated	reserves	tKe	rigKt	to	cKange	tKe	circuitry	and	speci¿cations	witKout	notice	at	any	time.

│

Evaluates: MAX17243

| MAX17243EVKIT#: Rev A   | MAX17243EVKIT#: Rev A                                                  |     |                         |                           |
|-------------------------|------------------------------------------------------------------------|-----|-------------------------|---------------------------|
| Parent                  | Component                                                              | QTY | Remarks                 | Manufacturer              |
| Number                  | Description                                                            | Per | (Reference Designators) | Part Number               |
| MAX17243EVKIT#          | 47uF, 50V aluminum electrolytic capacitor (E)                          | 1   | C1                      |                           |
|                         | 4.7uF 10%, 50V X7R ceramic capacitor (1210)                            | 1   | C2                      | Murata GCM32ER71H475KA55L |
|                         | 0.1uF 10%, 50V X7R ceramic capacitor (0603)                            | 2   | C3, C5                  | Murata GCM188R71H104KA57D |
|                         | 2.2uF 10%, 50V X7R ceramic capacitor (0805)                            | 1   | C4                      | TDK C2012X7R1H225K125AC   |
|                         | 0.1uF 10%, 50V X7R ceramic capacitor (0402)                            | 1   | C6                      | TDK CGA2B3X7R1H104K050BB  |
|                         | 22uF 10%, 10V X7R ceramic capacitors (1210)                            | 2   | C7, C8                  | Murata GCM32ER71A226KE12L |
|                         | 2.2uF 10%, 10V X7R ceramic capacitor (0603)                            | 1   | C9                      | Murata GRM188R71A225K     |
|                         | 1000pF 10% 50V X7R ceramic capacitor (0402)                            | 1   | C10                     | Murata GRM155R71H102K     |
|                         | 10pF 5% 50V C0G ceramic capacitor (0402)                               | 1   | C11                     | Murata GRM1555C1H100J     |
|                         | Multipurpose test points, red                                          | 4   | PGOOD                   | Keystone 5010             |
|                         | Multipurpose test points, black                                        | 3   | PGND, PGND, AGND        | Keystone 5011             |
|                         | 3 pin header, 2.54MM, Comes in 36-40 Pin Strips (CUT TO FIT)           | 3   | JU1-JU3                 | SULLINS PEC36SAAN         |
|                         | 2 pin header, 2.54MM, Comes in 36-40 Pin Strips (CUT TO FIT)           | 1   | JU4                     | SULLINS PEC36SAAN         |
|                         | 2.2uH, 9.2A Shielded Power inductor                                    | 1   | L1                      | Coilcraft XAL5030-222MEB  |
|                         | 20.0k ohms 1% resistor (0402)                                          | 1   | R1                      | Any                       |
|                         | 0 ohms 5% resistor (0402)                                              | 3   | R2, R6, R11             | Any                       |
|                         | 100k ohms 5% resistor (0402)                                           | 1   | R3                      | Any                       |
|                         | 12.1k ohms 1% resistor (0402)                                          | 1   | R4                      | Any                       |
|                         | 10k ohms 5% resistor (0402)                                            | 1   | R5                      | Any                       |
|                         | 0 ohms 5% resistor (1210)                                              | 1   | R9                      | Any                       |
|                         | 220kHz to 2.2MHz, 3A Fully Integrated Step-down Converter (20 TQFN-EP) | 1   | U1                      | Maxim MAX17243ETPA+       |
|                         | Shunts                                                                 | 4   |                         | Kycon SX1100-B            |
|                         | PC board: MAX17243 EVALUATION KIT                                      | 1   | 2 oz.                   |                           |
|                         | Not installed, ceramic capacitor (0603)                                | 0   | C13                     |                           |
|                         | Not installed, ceramic capacitor (0402)                                | 0   | C12, C14, C15, C16, C17 |                           |
|                         | Not Installed, Ferrite Bead (1206)                                     | 0   | L2                      |                           |
|                         | Not installed, resistor (0402)                                         | 0   | R7, R8, R10             |                           |

TOP SILKSCREEN

<!-- image -->

<!-- image -->

COMPONENT SIDE

<!-- image -->

LAYER 2 PGND

<!-- image -->

<!-- image -->

LAYER 3 SIGNAL, PGND

<!-- image -->

<!-- image -->

SOLDER SIDE

<!-- image -->

<!-- image -->

## BOTTOM SILKSCREEN

SCHEMATIC

<!-- image -->

<!-- image -->

## MINIMAL COMPONENT SCHEMATIC