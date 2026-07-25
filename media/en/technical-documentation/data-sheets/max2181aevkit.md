<!-- lastmod 2022-08-02 -->
## MAX2181A Evaluation Kit

## General Description

The MAX2181A evaluation kit (EV kit) simplifies evaluation  of  the  MAX2181A  FM  low-noise  amplifier. The  EV kit enables testing of the device's features and performance  and  does  not  require  additional  support circuitry or  software. The signal input and output use SMA connectors to  facilitate connection of RF test equipment.

The EV kit is fully assembled with the device on board and incorporates input matching components for the U.S. FM broadcast band.

## Features

- Easy Evaluation of the MAX2181A
- +5V Single-Supply Operation
- RF Input and Output Matched to 50Ω
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX2181A

## Quick Start

## Required Test Equipment

- RF  signal generator (or generators) capable  of delivering  a  signal  in  the  76MHz  to  162.5MHz  (FM) range  at  a  power  level  of  -34dBm.(A  higher  power source is required to measure distortion performance. See the Measurements section for more details)
- RF  spectrum  analyzer  that  covers  the  operating frequency range
- DC power supply capable of supplying +5V
- 50Ω cables with SMA connectors
- Ammeter to measure supply current (optional)
- Noise-figure meter to measure NF (optional)
- Network  analyzer  to  measure  gain  and  return  loss (optional)

## Connections and Setup

## Checking Gain

The EV kit is fully assembled and factory tested. Follow the steps below for proper device evaluation in the default configuration.

- 1) Connect a DC supply with its output disabled (preset to  +5V) to the +5V and GND terminals (through an ammeter, if desired) on the EV kit.
- 2) Set the  RF  generator  to  the  desired  frequency at a power  level of  -37dBm.  Disable  the  generator's  output  and  connect  it  to  the  FMIN  SMA connector on the EV kit.
- 3) Connect  an  SMA  cable  from  the  FMOUT  SMA connector to the input of the spectrum analyzer.
- 4) Turn  on  the  DC  supply.  The  supply  current  should read approximately 56mA.
- 5) Activate the RF generator's output. The signal on the spectrum analyzer's display should indicate a typical gain, as shown on the MAX2181A IC data sheet after accounting for cable and board losses.

<!-- image -->

## MAX2181A Evaluation Kit

- 6) Optional: Another method of determining gain is by using a network analyzer. This has the advantage of displaying  gain  versus  a  swept  frequency  band,  in addition  to  displaying  input  and  output  return  loss. Refer to the user manual of the network analyzer for setup information. Note: Depending on the settings of the device's maximum gain and power detector, the AGC loop can become active for input power levels as low as -24dBm. To ensure consistent results are obtained, the stimulus level of the network analyzer should be no greater than -34dBm, ensuring that the gain is unaffected by the AGC loop.

## Detailed Description of Hardware

## Test Points

The  MAX2181A  signal  path  includes  a  power  detector and AGC loop, which can be adjusted for maximum gain and  AGC  threshold.  In  addition,  the  AGC  loop  can  be overridden by applying an external voltage to the FMAGC pin. Table 1 describes how to control the performance of the device using the test points on the EV kit.

## Measurements

## Noise

Noise figure can be measured using a NF meter. Because of the large number of FM broadcast signals that might be present, this measurement should take place with the EV kit in a screen box or other type of RF shield.

## Distortion

Two-tone  distortion  of  the  amplifier  can  be  measured using a power combiner to couple the signals from two generators into FMIN on the EV kit. During closed-loop operation,  as  the  signal  levels  increase,  the  device's input impedance is reduced. At the upper end of the input signal level range, where each tone can be greater than 120dBµV,  this  reduced  impedance  could  create  distortion within the signal generators. For accurate distortion measurement,  the input of the EV  kit should be isolated from the signal generators and power combiner. This can be accomplished using a ferrite isolator.

## Layout Considerations

## Electrical

At high-signal-level conditions, the RF currents flowing in the device can induce voltages in the PCB ground plane, known as 'ground bounce.' To avoid unwanted spurious products due to ground bounce, proper grounding techniques must be followed.

## Thermal

An array  of  vias  connected  to  the  ground  plane  should be included to transfer heat away from the MAX2181A. Please refer to the EV Kit layout for an example of this.

## Table 1. Control Performance with Test Points

| TEST POINT   | FUNCTION                    | DESCRIPTION                                                                                                                                                  |
|--------------|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FMAGC        | FM AGC loop control voltage | Applying a DC control voltage to FMAGC allows the user to override the AGC loop. 0V gives maximum gain; 5V gives minimum gain.                               |
| FMDET        | FM AGC threshold            | Sets the FM AGC threshold. Refer to the MAX2181A IC data sheet. Default value on the EV kit is 99dBµV (typ) referred to the FMOUT SMA connector (R1 = 43kΩ). |
| FMGAIN       | FM gain control             | Sets the maximum value of FM gain (FMAGC = 0V). Default setting on the EV kit is 6dB (typ) referred to the FMOUT SMA connector (R8 = 0Ω).                    |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX2181AEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX2181A

│

## MAX2181A Evaluation Kit

## MAX2181A EV Kit Bill of Materials

| REFERENCE DESIGNATOR   |   QTY | VALUE          | TOLERANCE   | DESCRIPTION                   | MANUFACTURER     | PART NUMBER                   |
|------------------------|-------|----------------|-------------|-------------------------------|------------------|-------------------------------|
| C3, C9                 |     2 | 0.1µF          | 10%         | 0603 Capacitor                | Murata           | GRM18871C105K                 |
| C4                     |     1 | 2700pF         | 10%         | 0603 Capacitor                | Murata           | GRM1885C1H272K                |
| C5                     |     1 | 0.47µF         | 10%         | 0603 Capacitor                | Murata           | GRM188F51C474Z                |
| C6                     |     1 | 100pF          | 5%          | 0603 Capacitor                | Murata           | GRM1885C1H101J                |
| C7                     |     1 | 27pF           | 5%          | 0603 Capacitor                | Murata           | GRM1885C1H2700J               |
| C10                    |     1 | 10µF           | 10%         | Tantalum Capacitor 'C' Case   | AVX              | TAJC106K035R                  |
| C11                    |     0 | DNI            | 10%         | Tantalum Capacitor 'A' Case   | AVX              | TAJA106K010R Leave Site Open  |
| FMAGC +5V(2)           |     3 | Test Point     |             | Test Point, PC Mini-Red       | Keystone         | 5000                          |
| FMGAIN FMDET           |     0 | Test Point DNI |             | Test Point, PC Mini-Red       | Keystone         | Leave Site Open               |
| FMIN FMOUT             |     2 | Connector      |             | SMA Edge Mount-Round Contact  | Johnson          | 142-0701-801                  |
| GND(2)                 |     2 | Test Point     |             | Test Point, PC Mini-Black     | Keystone         | 5001                          |
| L1                     |     1 | 470nH          | 5%          | 0603 Inductor                 | Murata           | LQW18ANR47J00                 |
| L2                     |     0 | DNI            | 5%          | Midi Spring Air Core Inductor | Coilcraft        | 1812SMS-R10JL Leave Site Open |
| L3                     |     1 | 82nH           | 5%          | 1008 Inductor                 | Murata           | LQW2UAS82NJ00                 |
| R1                     |     1 | 43kΩ           | 5%          | 0603 Resistor                 |                  | Use Lead-Free Only            |
| R2                     |     1 | 62Ω            | 5%          | 0603 Resistor                 |                  | Use Lead-Free Only            |
| R3                     |     1 | 100Ω           | 5%          | 0603 Resistor                 |                  | Use Lead-Free Only            |
| R4                     |     1 | 20KΩ           | 5%          | 0603 Resistor                 |                  | Use Lead-Free Only            |
| R5, R6, R8             |     3 | 0Ω             | 5%          | 0603 Resistor                 |                  | Use Lead-Free Only            |
| U1                     |     1 | MAX2181A       |             | AM/FM Automotive LNA          | Maxim Integrated | MAX2181AETE/V+                |
| -                      |     1 | -              |             | PCB: MAX2181A EVALUATION KIT# | Maxim Integrated | MAX2181AEVKIT#                |

## MAX2181A EV Kit Schematic

<!-- image -->

MAX2181A EV Kit Schematic

## MAX2181A EV Kit PCB Layouts

MAX2181A EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX2181A EV Kit PCB Layouts (continued)

MAX2181A EV Kit PCB Layout-Top Copper

<!-- image -->

## MAX2181A EV Kit PCB Layouts (continued)

MAX2181A EV Kit PCB Layout-Bottom Copper

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP InteJrated reserYes the riJht to chanJe the circuitry and speci¿cations without notice at any tiPe.

│

Evaluates: MAX2181A