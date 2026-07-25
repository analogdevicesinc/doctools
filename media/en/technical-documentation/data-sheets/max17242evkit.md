<!-- lastmod 2022-08-02 -->
## MAX17242 Evaluation Kit with Preset 3.3V/2A Output

## General Description

The  MAX17242  evaluation  kit  (EV  kit)  demonstrates the  MAX17242  high-voltage,  current-mode  step-down converters with low operating current. The EV kit operates over a wide 3.5V to 36V input range and the output is set for 3.3V at 2A.

The EV kit comes with the MAX17242ETPB installed.

## Features

- Wide 3.5V to 36V Input Supply Range
- 96% Peak Efficiency at 3.5V Input in Skip Mode
- Forced-PWM or Skip-Mode Operation
- Programmable Switching Frequency (400kHz Default)
- Selectable Spread Spectrum Optimizes EMI Performance
- FSYNC Input and Power-Good Output
- Proven 4-Layer 2oz Copper PCB Layout
- Demonstrates 950mil x 835mil Solution Size
- Fully Assembled and Tested

## Quick Start

## Required Equipment

-  MAX17242EV	kit
- 12V,	2A	DC	power	supply
- Electronic	load	capable	of	2A
- Digital	voltmeter	(DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on supplies until all connections are made.

- 1)  Verify  that  jumpers  JU1-JU4  are  in  their  default positions, as shown in Table 1 through Table 4.
- 2)  Connect  the  power  supply  between  the  VINSUPSW and nearest PGND 2-hole pads or test points.
- 3)  Connect the 2A electronic load between the VOUT and nearest PGND 2-hole pads or test points.
- 4)  Connect  the  DVM  between  the  VOUT  and  nearest PGND test points.
- 5)  Turn on the power supply.
- 6)  Enable the electronic load.
- 7)  Verify  that  the  voltage  at  the  VOUT  test  point  is approximately 3.3V.

Evaluates: MAX17242

## Table 1. EN Configuration (JU1)

| SHUNT POSITION   | EN PIN            | MODE             |
|------------------|-------------------|------------------|
| 1-2*             | Connected to SUP  | Normal Operation |
| 2-3              | Connected to PGND | Shutdown Mode    |

## Table 2. Operating-Mode and Frequency Control (JU2)

| SHUNT POSITION   | FSYNC PIN                                        | MODE                                                |
|------------------|--------------------------------------------------|-----------------------------------------------------|
| 1-2*             | Connected to BIAS                                | Forced-PWM mode                                     |
| 2-3              | Connected to AGND                                | Skip mode                                           |
| Not installed    | Connected to FSYNC test point and external clock | Forced-PWM mode (device syncs to an external clock) |

## Table 3. Spread Spectrum (JU3)

| SHUNT POSITION   | SPS PIN           | MODE                     |
|------------------|-------------------|--------------------------|
| 1-2*             | Connected to BIAS | Spread-Spectrum Enabled  |
| 2-3              | Connected to AGND | Spread-Spectrum Disabled |

## Table 4. PGOOD (JU4)

| SHUNT POSITION   | MODE                        |
|------------------|-----------------------------|
| Installed*       | PGOOD pulled high to BIAS   |
| Not installed    | PGOOD pulled high to V_PULL |

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17242 Evaluation Kit with Preset 3.3V/2A Output

## Detailed Description of Hardware

The MAX17242EV kit demonstrates the MAX17242 highvoltage,  high-frequency,  step-down  converter  with  low operating current. The EV kit operates over a wide 3.3V to 36V input range and the output is set for 3.3V at 2A. Consider thermal and switching efficiency when designing for operation in the 24V-36V input voltage range.

## Enable (EN)

Place a shunt in the 1-2 position on JU1 for normal operation. To place the device into shutdown mode, move the shunt on JU1 to the 2-3 position.

## Synchronization Input (FSYNC)

The EV kit features jumper JU2 to control the synchronization  input  (FSYNC).  The  device  synchronizes  to  an external  signal  applied  to  FSYNC.  Connect  FSYNC  to AGND to enable skip-mode operation. Connect to BIAS to enable Forced-PWM mode, or to an external clock to enable fixed-frequency forced-PWM mode operation.

To use an external clock, uninstall the shunt on jumper JU2 and apply the signal at the FSYNC test point and AGND. The external clock frequency at FSYNC can be higher or lower than the internal clock by 20%. Ensure that the duty cycle of the external clock used has a minimum 100ns pulse width. The external clock logic High voltage can be in the in the 1.4V-5V range.

## Spread-Spectrum Option (SPS)

The EV kit provides jumper JU3 that allows SPS to be pulled high (BIAS) or pulled low (AGND). Connect  SPS high  to  enable  spread  spectrum    where  the  operating frequency  is  varied  ±3%  centered  on  FOSC.  Connect SPS low  to disable the spread-spectrum feature.

## Setting the Switching Frequency (FOSC)

The EV kit switches at 400kHz by default, and the switching frequency is set by a resistor, R FOSC  (R4), connected from FOSC to AGND. Refer to TOC08 in the Typical  Operating Characteristics section of the MAX17242 IC data sheet for the correct R FOSC  (R4) value.

## Evaluates: MAX17242

## Power-Good Output (PGOOD)

The  EV  kit  provides  a  PGOOD  test  point  to  monitor  the status of the device output. PGOOD asserts when V OUT rises  above  95%  of  its  regulation  voltage.  PGOOD deasserts when V OUT  drops below 92.5% of its regulation voltage.  R5  pulls  PGOOD  up  to  BIAS  or  V\_PULL  with respect to AGND. When operating in Skip-mode, use an external voltage source for V\_PULL. Remove the shunt on jumper JU4 and connect an external voltage source up to 5.5V to the V\_PULL 2-hole pad.

## Output

Resistor R6 connects FB to BIAS for a fixed +3.3V (EV kit default output) or a fixed +5V output voltage. To set the output to other voltages between 1V and 10V, connect a resistive divider from output (OUT) to FB to AGND. Use the following equation to determine the R7 and R8 of the resistive divider network:

<!-- formula-not-decoded -->

where V FB =	1V	and	R8	is	≤	500kΩ.

## Operation at 1MHz Switching Frequency

For 1MHz switching frequency, the following components must be changed to:

- R4	=	27.4kΩ
- L1 = 4.7µH (recommend Coilcraft XAL6060-472MEB)
- R1	=			12.1kΩ
- C10 = 6,800pF

Additional capacitance on C8 may be needed, depending on transient performance.

## MAX17242 Evaluation Kit with Preset 3.3V/2A Output

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft Inc.  | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| TDK Corporation | www.tdk.com       |

Note: Indicate that you are using the MAX17242 when contacting these component suppliers.

## MAX17242 EV Bill of Materials

| Ref_Des                 | Description                                                            |   Per Part Number | Per Part Number           |
|-------------------------|------------------------------------------------------------------------|-------------------|---------------------------|
| C1                      | 150uF, 50V aluminum electrolytic capacitor (G, 10x10.2)                |                 1 | Panasonic EEE-FK1H151P    |
| C2                      | 4.7uF 10%, 50V X7R ceramic capacitor (1210)                            |                 1 | Murata GCM32ER71H475KA55L |
| C3, C5                  | 0.1uF 10%, 50V X7R ceramic capacitor (0603)                            |                 2 | Murata GCM188R71H104KA57D |
| C4                      | 2.2uF 10%, 50V X7R ceramic capacitor (0805)                            |                 1 | TDK C2012X7R1H225K125AC   |
| C6                      | 0.1uF 10%, 50V X7R ceramic capacitor (0402)                            |                 1 | TDK CGA2B3X7R1H104K050BB  |
| C7                      | 22uF 10%, 10V X7R ceramic capacitors (1210)                            |                 1 | Murata GCM32ER71A226KE12L |
| C9                      | 2.2uF 10%, 10V X7R ceramic capactor (0603)                             |                 1 | Murata GRM188R71A225K     |
| C10                     | 2200pF 10% 50V X7R ceramic capacitor (0402)                            |                 1 | Murata GRM155R71H222K     |
| C11                     | 3pF 0.25% 50V C0G ceramic capacitor (0402)                             |                 1 | Murata GRM1555C1H3R0C     |
| SUP, VINSUPSW, VOUT     | Multipurpose test points, red                                          |                 3 | Keystone 5010             |
| PGND, PGND, AGND        | Multipurpose test points, black                                        |                 3 | Keystone 5011             |
| PGOOD                   | Multipurpose test point, yellow                                        |                 1 | Keystone 5014             |
| JU1-JU3                 | 3 pin header, 2.54MM, Comes in 36-40 Pin Strips (CUT TO FIT)           |                 3 | SULLINS PEC36SAAN         |
| JU4                     | 2 pin header, 2.54MM, Comes in 36-40 Pin Strips (CUT TO FIT)           |                 1 | SULLINS PEC36SAAN         |
| L1                      | 10uH, 7.6A Shielded Power inductor                                     |                 1 | Coilcraft XAL6060-103MEB  |
| R1                      | 15.8k ohms 1% resistor (0402)                                          |                 1 | Any                       |
| R2, R6, R11             | 0 ohms 5% resistor (0402)                                              |                 3 | Any                       |
| R3                      | 100k ohms 5% resistor (0402)                                           |                 1 | Any                       |
| R4                      | 73.2k ohms 1% resistor (0402)                                          |                 1 | Any                       |
| R5                      | 10k ohms 5% resistor (0402)                                            |                 1 | Any                       |
| R9                      | 0 ohms 5% resistor (1210)                                              |                 1 | Any                       |
| U1                      | 220kHz to 2.2MHz, 2A Fully Integrated Step-down Converter (20 TQFN-EP) |                 1 | Maxim max17242ETPB+       |
|                         | Shunts                                                                 |                 4 | Kycon SX1100-B            |
| 2 oz.                   | PC board: max17242 EVALUATION KIT                                      |                 1 |                           |
| C8                      | Not installed, ceramic capacitor (1210)                                |                 0 |                           |
| C13                     | Not installed, ceramic capacitor (0603)                                |                 0 |                           |
| C12, C14, C15, C16, C17 | Not installed, ceramic capacitor (0402)                                |                 0 |                           |
| C18                     | Not installed, ceramic capacitor (0805)                                |                 0 |                           |
| L2                      | Not Installed, Ferrite Bead (1206)                                     |                 0 |                           |
| FSYNC                   | Not Installed Multipurpose test point, yellow                          |                 0 | Keystone 5014             |
| R7, R8, R10             | Not installed, resistor (0402)                                         |                 0 |                           |

Evaluates: MAX17242

## MAX17242 Evaluation Kit with Preset 3.3V/2A Output

## MAX17242 EV Schematics

MAX17242 EV Schematic

<!-- image -->

MAX17242 EV Minimal Component Schematic

<!-- image -->

Evaluates: MAX17242

│

## MAX17242 Evaluation Kit with Preset 3.3V/2A Output

## MAX17242 EV PCB Layout

MAX17242 EV Top Silkscreen

<!-- image -->

MAX17242 EV Component Side

<!-- image -->

Evaluates: MAX17242

MAX17242 EV Bottom Silkscreen

<!-- image -->

MAX17242 EV Solder Side

<!-- image -->

│

## MAX17242 Evaluation Kit with Preset 3.3V/2A Output

## MAX17242 EV PCB Layout (Continued)

MAX17242 EV Layer 2-PGND

<!-- image -->

MAX17242 EV Layer 3-Signal PGND

<!-- image -->

## Ordering Information

#Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX17242EVKIT# | EV Kit |

│

## MAX17242 Evaluation Kit with Preset 3.3V/2A Output

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                   | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------|-----------------|
|                 0 | 12/15           | Initial release                                               | -               |
|                 1 | 5/16            | Updated Table 2                                               | 1               |
|                 2 | 8/16            | Removed FSYNC information in Table 2                          | 1               |
|                 3 | 5/18            | Updated bill of materials, schematic, and PCB layout diagrams | 3-6             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Ma[im	,ntegrated	reserves	tKe	rigKt	to	cKange	tKe	circuitry	and	speci¿cations	witKout	notice	at	any	time.

│

Evaluates: MAX17242