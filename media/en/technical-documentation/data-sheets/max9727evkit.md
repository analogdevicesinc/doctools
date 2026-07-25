<!-- lastmod 2022-08-03 -->
## General Description

The MAX9727 evaluation kit (EV kit) is a fully assembled and tested PCB that configures the MAX9727 as four general-purpose op amps. The EV kit provides the components to operate the MAX9727 as an inverting amplifier, a noninverting amplifier, a difference amplifier, or as an integrator.

The MAX9727 EV kit operates from a 2.7V to 5.5VDC power supply. The DirectDrive TM feature  of  the MAX9727 provides outputs that swing above and below ground without DC-blocking capacitors on the output.

## Component List

| DESIGNATION               | QTY                 | DESCRIPTION                                                                                                         |
|---------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------|
| REQUIRED COMPONENTS       | REQUIRED COMPONENTS | REQUIRED COMPONENTS                                                                                                 |
| C8, C9, C12               | 3                   | 1µF ±20%, 10V X7R ceramic capacitors (0603) Murata GRM185R61A105KE36B Taiyo Yuden LMK107BJ105KA-B TDK C1608JB1A105M |
| U1                        | 1                   | MAX9727EEP+ 20-Pin QSOP                                                                                             |
| OPTIONAL COMPONENTS       | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS                                                                                                 |
| C1, C2, C15, C16          | 4                   | 100pF ±5%, 50V COG ceramic capacitors (0603) Murata GQM1885C1H101JB Taiyo Yuden UMK107CG101JZ TDK C1608CH1H101J     |
| C3-C6, C10, C11, C13, C14 | 8                   | 2.2µF ±20%, 10V X5R ceramic capacitors (0805) Murata GRM21BR61A225KA Taiyo Yuden LMK212BJ225KG TDK C2012X5R1A225KB  |
| C7, C17                   | 2                   | 100nF ±20%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104KA Taiyo Yuden EMK107BJ104KA TDK C1608JB1E104M    |
| JU1                       | 1                   | 3-pin header                                                                                                        |
| R1-R16                    | 16                  | 4.99k Ω ±1% resistors (0603)                                                                                        |
| -                         | 1                   | Shunts                                                                                                              |
| -                         | 1                   | MAX9727 PCB                                                                                                         |

## Procedure

The MAX9727 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install  shunts across pins 1-2 of jumper JU1. ( SHDN high, MAX9727 enabled).
- 2) Connect the positive terminal of the 3V to 5V power supply to the VDD pad and the ground terminal of the power supply to the GND pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ Ground-Referenced Outputs
- ♦ EV Kit with Four Easily Configured GeneralPurpose Op Amps
- ♦ Drives 3VRMS into 1k Ω Load at 5V Supply
- ♦ 109dB Signal-to-Noise Ratio (SNR)
- ♦ No Audible Clicks or Pops at Power-Up/Down
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX9727EVKIT+ | 0°C to +70°C | 20 QSOP      |

+Denotes a lead-free and RoHS-compliant EV kit.

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Murata      | 770-436-1300 | www.murata.com        |
| Taiyo Yuden | 800-348-1496 | www.t-yuden.com       |
| TDK         | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9727 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 3V to 5V, 0.5A power supply
- Signal source (i.e., function generator or audio source)
- Oscilloscope

## MAX9727 Evaluation Kit

- 3) Connect the positive terminal of the signal source to the INA- pad and the ground terminal of the signal source to the GND pad.
- 4) Connect the oscilloscope probe to OUTA, and the scope ground to the GND pad.
- 5) Set the oscilloscope vertical sensitivity to 500mV per division and the time base to 500µs per division.  Observe the sine wave on the scope, which should be ±500mV centered at GND potential.
- 6) Turn on the power supply, and then turn on the signal source.
- 7) Set the signal source to 1kHz, 1VP-P sine wave.
- 8) Observe the sine wave on the scope, which should be ±500mV centered at GND potential.

## Detailed Description

The MAX9727 EV kit is designed to evaluate the MAX9727 in the 20-pin QSOP package. The MAX9727 is a single-supply op amp with a built-in charge pump to generate a negative supply voltage.

Each of the four op amps has been populated as a difference amplifier. See Table 1 for the readily available functions.

## Component Selection and Substitution

## Input Capacitors

The MAX9727 EV kit is configured with AC-coupling on both the inverting and noninverting inputs of all four op amps. These are initially populated with 1µF ceramic capacitors. If AC-coupling is not needed, these can be removed and replaced with 0805 0 Ω jumpers.

The choice of ceramic capacitors on the inputs is a compromise between size, cost, and performance. Better AC performance can be obtained by substituting with a different capacitor type, such as tantalum.

If the op amps are operated in noninverting mode, the capacitor on the inverting input can often be removed. If  the  op  amps  are  operated in inverting mode, the capacitor on the noninverting input can often be removed.

## Resistor Networks

The MAX9727 EV kit is configured with resistors on both the inverting and noninverting inputs of all four op amps. These are initially populated with 4.99k Ω ±1% resistors.  In  many applications, the resistors on the noninverting  input  are  not  needed  and  may  be removed.

## Feedback Capacitors

The MAX9727 EV kit is configured with feedback capacitors on all four op amps. These are initially populated with 100pF COG-type ceramic capacitors. These are not required in most applications and can be removed.

If operating in the inverting op-amp configuration, these feedback capacitors form a first-order low-pass filter. The value of the capacitors can be changed to select an appropriate corner frequency.

## Charge Pump and Bypass Capacitors

The MAX9727 EV kit is configured with capacitors on both the PVDD pin and the PVSS pin of the MAX9727 IC (C8 and C12 in Figure 1). These are initially populated with 1µF X7R-type ceramic capacitors, which work well for most applications.

Capacitor C12 provides the instantaneous current to the internal charge pump of the MAX9727 IC, and C8 is the reservoir capacitor at the output of the charge pump. Capacitor C9 is used as the flying capacitor, first storing charge from the positive supply, then transferring it to the reservoir capacitor, C8.

The MAX9727 EV kit is configured with capacitors on both the VDD pin and the VSS pin of the MAX9727 IC. These are initially populated with 100nF X7R-type ceramic capacitors. These may not be required in some applications because the PVDD and PVSS capacitors are located close to the IC.

Table 1. Common Amplifier Functions for the MAX9727 EV Kit

| IN_+ CONNECTION       | IN_- CONNECTION       | FUNCTION               |   GAIN (dB) | NOTE                                                       |
|-----------------------|-----------------------|------------------------|-------------|------------------------------------------------------------|
| Unconnected           | Input signal          | Inverting amplifier    |          -1 | -                                                          |
| Input signal          | Unconnected           | Unity gain buffer      |          +1 | R7, R8, R11, and R12 open, OUT swing limited by V CM range |
| Input signal          | Ground                | Noninverting amplifier |          +2 | R7, R8, R11, and R12 open                                  |
| Positive input signal | Negative input signal | Difference amplifier   |          +1 | V OUT = V IN_+ - V IN_ -                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper Selection

## Shutdown Mode

The MAX9727 EV kit has a jumper to select the operational modes of the MAX9727 IC. Jumper JU1 controls the SHDN pin. See Table 2 for JU1 selection.

## MAX9727 Evaluation Kit

## Table 2. JU1 Jumper Selection

| SHUNT POSITION   | EV KIT FUNCTION     |
|------------------|---------------------|
| Pins 1-2*        | EV kit enabled      |
| Pins 2-3         | MAX9727 in shutdown |

<!-- image -->

Figure 1. MAX9727 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9727 Evaluation Kit

Figure 2. MAX9727 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9727 Evaluation Kit

<!-- image -->

Figure 3. MAX9727 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9727 Evaluation Kit

Figure 4. MAX9727 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600