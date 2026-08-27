<!-- lastmod 2022-08-04 -->
## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## General Description

Devices in the MAX3483AE  family (MAX3483AE/ MAX3485AE/MAX3488AE/MAX3490AE/MAX3491AE) are  ±20kV  ESD-protected  RS-485/422  transceivers, optimized for extended cable runs in noisy environments. All devices operate from a single 3.3V supply.

The MAX3483AE and MAX3485AE are half-duplex transceivers. The  MAX3488AE,  MAX3490AE,  and  MAX3491AE  are full-duplex  transceivers.  The  MAX3483AE/85AE  have  a 1-unit  load  receiver  input  impedance,  allowing  up  to  32 transceivers  on  the  bus.  The  MAX3488AE/90AE/91AE have a 1/4-unit load receiver input impedance, allowing up to 128 transceivers on the bus. Each transceiver includes a fail-safe receiver, ensuring that the receiver output (RO) is high when inputs are shorted, open, or connected to a three-state bus.

All devices feature enhanced electrostatic discharge (ESD) protection. All transmitter outputs and receiver inputs are protected  to  ±20kV  HBM  ESD,  ±15kV Air-Gap  ESD  and ±8kV Contact ESD in accordance to IEC 61000-4-2.

The MAX3483AE,  MAX3485AE,  MAX3488AE,  and MAX3490AE are available in industry standard 8-pin SO package, while the MAX3491AE is available in a 14-pin SO package.

## Functional Diagram

<!-- image -->

<!-- image -->

+3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## Benefits and Features

- Integrated	Protection	Increases	Robustness
- High	ESD	Protection ±20kV HBM ESD per JEDEC JS-001-2012 ±15kV Air Gap per IEC 61000-4-2 ±8kV Contact ESD per IEC 61000-4-2
- Short-Circuit	Protected	Outputs
- True	Fail-Safe	Receiver	Prevents	False	Transition on Receiver Input Short or Open Events
- Hot-Swap Capability Eliminates False Transitions During	Power-Up	or	Hot	Insertion
- High-Speed	Data	Rates	up	to	20Mbps
- Up	to	-40°C	to	+125°C	Operating	Temperature
- Allows	Up	to	128	Transceivers	on	the	Bus

## Applications

- Industrial-Control	Local	Area	Networks
- Transceivers	for	EMI-Sensitive	Applications
- Telecommuncations

Ordering Information appears at end of data sheet.

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## Absolute Maximum Ratings

(Voltages	referenced	to	GND.)

VCC

.....................................................................

-0.3V	to	+4.0V

RO ............................................................ -0.3V to (VCC

+	0.3V)

RE,

DE, DI  ............................................................

-0.3V	to	+4.0V

A, B, Y, Z ............................................................

-9.0V	to	+13.0V

Short-Circuit	Duration	(RO,	A,	B,	Y,	Z)	to	GND

......... Continuous

Operating Temperature Range

MAX3483AE/85AE/88AE/90AE/91AE ..........

-40°C	to	+125°C

MAX3488AE/90AE .......................................

-40°C	to	+105°C

Junction Temperature  ......................................................

+150°C

Storage Temperature Range ............................ -65

°

C	to	+150°C

Continuous	Power	Dissipation	(T

A

=	+70°C)

8	SO	(derate	at	7.6mW/°C	above	+70°C)

...................

606mW

14	SO	(derate	at	11.9mW/°C	above	+70°C)

...............

952mW

Lead	Temperature	(soldering,	10s)

.................................

+300°C

Soldering Temperature (reflow)  ......................................

+260°C

Junction-to-Case Thermal Resistance (

θ

JC )

8-pin SO ......................................................................

38°C/W

14-pin SO ....................................................................

34°C/W

Junction-to-Ambient Thermal Resistance (

θ

JA )

8-pin SO ....................................................................

132°C/W

14-pin SO ....................................................................

84°C/W

## (Note 1) Package Thermal Characteristics

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

Note 1: Package	thermal	resistances	were	obtained	using	the	method	described	in	JEDEC	specification	JESD51-7,	using	a	four-layer board. For detailed information on package thermal considerations, refer to www.maximintegrated.com/thermal-tutorial .

## Electrical Characteristics

(V CC =	+3.0V	to	+3.6V,	T A  = T MIN to T MAX , unless otherwise specified. Typical values are at V CC =	+3.3V	and	T A =	+25°C.)	(Notes	2,	3)

| PARAMETER                                          | SYMBOL       | CONDITIONS                              | MIN          | TYP          | MAX          | UNITS        |
|----------------------------------------------------|--------------|-----------------------------------------|--------------|--------------|--------------|--------------|
| POWER SUPPLY                                       | POWER SUPPLY | POWER SUPPLY                            | POWER SUPPLY | POWER SUPPLY | POWER SUPPLY | POWER SUPPLY |
| Supply Voltage                                     | V CC         |                                         | 3.0          |              | 3.6          | V            |
| Supply Current                                     | I CC         | DE = V CC , RE = GND, no load           |              | 1.9          | 4            | mA           |
| Supply Current                                     | I CC         | DE = 0, RE = 0, no load, DI = 0 or V CC | 1.2          |              | 4.0          | mA           |
| Shutdown Supply Current                            | I SHDN       | DE=GND, RE =V CC ,MAX3483AE/85AE/91AE   |              |              | 10           | µA           |
| DRIVER                                             | DRIVER       | DRIVER                                  | DRIVER       | DRIVER       | DRIVER       | DRIVER       |
| Differential Driver Output                         | V OD         | V CC = 3V, R L = 100Ω, Figure 1         | 2.0          |              |              | V            |
| Differential Driver Output                         | V OD         | V CC = 3V, R L = 54Ω, Figure 1          | 1.5          |              |              | V            |
| Change in Magnitude of Differential Output Voltage | ∆V OD        | R L = 54Ω or 100Ω, Figure 1 (Note 4)    | -0.2         |              | +0.2         | V            |
| Driver Common-Mode Output Voltage                  | V OC         | R L = 54Ω or 100Ω, Figure 1             |              | V CC /2      | 3            | V            |
| Change in Magnitude of Common- Mode Voltage        | ΔV OC        | R L = 54Ω or 100Ω, Figure 1 (Note 4)    | -0.2         |              | +0.2         | V            |
| Single-Ended Driver Output High                    | V OH         | A or B output, I Aor B = -20mA          | 2.2          |              |              | V            |
| Single-Ended Driver Output Low                     | V OL         | A or B output, I A orB = 20mA           |              |              | 0.8          | V            |
| Driver Short-Circuit Output Current                | I OSD        | V OUT = -7V                             | -250         |              |              | mA           |
| Driver Short-Circuit Output Current                | I OSD        | V OUT = +12V                            |              |              | 250          | mA           |

│

## +3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## Electrical Characteristics (continued)

(V CC =	+3.0V	to	+3.6V,	T A  = T MIN to T MAX , unless otherwise specified. Typical values are at V CC =	+3.3V	and	T A =	+25°C.)	(Notes	2,	3)

| PARAMETER                               | SYMBOL                            | CONDITIONS                                  | CONDITIONS                                  | MIN        | TYP   | MAX   | UNITS   |
|-----------------------------------------|-----------------------------------|---------------------------------------------|---------------------------------------------|------------|-------|-------|---------|
| RECEIVER                                |                                   |                                             |                                             |            |       |       |         |
| Input Current                           | I A, B                            | DE = GND, V CC = GND V IN = +12V            | DE = GND, V CC = GND V IN = +12V            |            | 430   | 1000  | µA      |
|                                         | I A, B                            | or +3.6V V IN = -7V                         | or +3.6V V IN = -7V                         | -450       | -300  |       |         |
| Differential Input Capacitance          | C A, B                            | Between A and B, DE = GND, f = 4MHz         | Between A and B, DE = GND, f = 4MHz         |            | 12    |       | pF      |
| Receiver Differential Threshold Voltage | V TH                              | -7V ≤ V CM ≤ +12V                           | -7V ≤ V CM ≤ +12V                           | -200       | -105  | -10   | mV      |
| Receiver Input Hysteresis               | ΔV TH                             | V CM = 0V                                   | V CM = 0V                                   |            | 10    |       | mV      |
| Receiver Input Resistance               | R IN                              | -7V ≤ V CM ≤ +12V                           | MAX3483AE/85AE                              | 12         |       |       | kΩ      |
|                                         | R IN                              |                                             | MAX3488AE/90AE/91AE                         | 48         |       |       | kΩ      |
| LOGIC INTERFACE (DI, DE, RE , RO)       | LOGIC INTERFACE (DI, DE, RE , RO) |                                             |                                             |            |       |       |         |
| Input Voltage High                      | V IH                              | DE, DI, RE                                  | DE, DI, RE                                  | 2.0        |       |       | V       |
| Input Voltage Low                       | V IL                              | DE, DI, RE                                  | DE, DI, RE                                  |            |       | 0.8   | V       |
| Input Hysteresis                        | V HYS                             | DE, DI, RE                                  | DE, DI, RE                                  | 50         | 50    |       | mV      |
| Input Current                           | I IN                              | DE, DI, RE                                  | DE, DI, RE                                  |            |       | ±2    | µA      |
| Input Impedance on First Transition     |                                   | DE, RE                                      | DE, RE                                      | 1          |       | 10    | kΩ      |
| RO Output Voltage High                  | V OHRO                            | RE = GND, I RO = -2mA, (V A - V B ) > 200mV | RE = GND, I RO = -2mA, (V A - V B ) > 200mV | V CC - 1.5 |       |       | V       |
| RO Output Voltage Low                   | V OLRO                            | RE = GND, I RO = 2mA, (V A - V B ) < -200mV | RE = GND, I RO = 2mA, (V A - V B ) < -200mV |            |       | 0.4   | V       |
| Receiver Three-State Output Current     | I OZR                             | RE = V CC , 0 ≤ V RO ≤ V CC                 | RE = V CC , 0 ≤ V RO ≤ V CC                 |            |       | ±1    | µA      |
| RE Pulldown and DE Pullup Resistance    | R IN                              |                                             |                                             | 1          | 1     |       | MΩ      |
| Receiver Output Short-Circuit Current   | I OSR                             | 0 ≤ V RO ≤ V CC                             | 0 ≤ V RO ≤ V CC                             |            |       | ±110  | mA      |
| PROTECTION                              | PROTECTION                        | PROTECTION                                  | PROTECTION                                  |            |       |       |         |
| Thermal Shutdown Threshold              | T SHDN                            | Temperature rising                          | Temperature rising                          |            | +160  |       | °C      |
| Thermal Shutdown Hysteresis             |                                   |                                             |                                             |            | 15    |       | °C      |
| ESD Protection on A, B, Z, and Y Pins   |                                   | IEC 61000-4-2 Air Gap Discharge to GND      | IEC 61000-4-2 Air Gap Discharge to GND      |            | ±15   |       | kV      |
|                                         |                                   | IEC 61000-4-2 Contact Discharge to GND      | IEC 61000-4-2 Contact Discharge to GND      |            | ±8    |       | kV      |
|                                         |                                   | Human Body Model to GND                     | Human Body Model to GND                     |            | ±20   |       | kV      |
| ESD Protection, All Other Pins          |                                   | Human Body Model                            | Human Body Model                            | ±2         |       |       | kV      |

│

+3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

+3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## Switching Characteristics MAX3485AE/MAX3490AE/MAX3491AE

(V CC =	+3V	to	+3.6V,	T A  = T MIN to T MAX , unless otherwise specified. Typical values are at V CC =	+3.3V	and	T A =	+25°C.)	(Notes	2,	3,	5)

| PARAMETER                                                    | SYMBOL      | CONDITIONS                                                            |   MIN | TYP   |   MAX | UNITS   |
|--------------------------------------------------------------|-------------|-----------------------------------------------------------------------|-------|-------|-------|---------|
| DRIVER                                                       |             |                                                                       |       |       |       |         |
| Driver Propagation Delay                                     | t DPLH      | R L = 54Ω, C L = 50pF,                                                |       |       |    30 | ns      |
| Driver Propagation Delay                                     | t DPHL      | Figures 2 and 3                                                       |       |       |    30 | ns      |
| Driver Differential Output Rise or Fall Time                 | t HL , t LH | R L = 54Ω, C L = 50pF, Figures 2 and 3                                |       |       |     7 | ns      |
| Differential Driver Output Skew &#124;t DPLH - t DPHL &#124; | t DSKEW     | R L = 54Ω, C L = 50pF, Figures 2 and 3 (Note 6)                       |       |       |     3 | ns      |
| Maximum Data Rate                                            | DR MAX      |                                                                       |    20 |       |       | Mbps    |
| Driver Enable to Output High                                 | t DZH       | R L = 110Ω, C L = 50pF, MAX3485AE, MAX3491AE Figures 4 and 5 (Note 7) |       |       |    40 | ns      |
| Driver Enable to Output Low                                  | t DZL       | R L = 110Ω, C L = 50pF, MAX3485AE, MAX3491AE Figures 4 and 5 (Note 7) |       |       |    40 | ns      |
| Driver Disable Time from Low                                 | t DLZ       | R L = 110Ω, C L = 50pF, MAX3485AE, MAX3491AE Figures 4 and 5          |       |       |    40 | ns      |
| Driver Disable Time from High                                | t DHZ       | R L = 110Ω, C L = 50pF, MAX3485AE, MAX3491AE Figures 4 and 5          |       |       |    40 | ns      |
| Driver Enable from Shutdown to Output High                   | t DLZ(SHDN) | R L = 110Ω, C L = 15pF, MAX3485AE, Figures 4 and 5 (Note 7)           |       |       |     6 | µs      |
| Driver Enable from Shutdown to Output High                   | t DLZ(SHDN) | R L = 1k Ω , C L = 15pF, MAX3491AE, Figure 8                          |       |       |   100 | µs      |
| Driver Enable from Shutdown to Output Low                    | t DHZ(SHDN) | R L = 110Ω, C L = 15pF, MAX3485AE Figures 4 and 5 (Note 7)            |       |       |     6 | µs      |
| Time to Shutdown                                             | t SHDN      | (Note 8)                                                              |    50 |       |   800 | ns      |
| RECEIVER                                                     |             |                                                                       |       |       |       |         |
| Receiver Propagation Delay                                   | t RPLH      | C L = 15pF, Figures 6 and 7                                           |       |       |    35 | ns      |
| Receiver Propagation Delay                                   | t RPHL      | C L = 15pF, Figures 6 and 7                                           |       |       |    35 | ns      |
| Receiver Output Skew                                         | t RSKEW     | C L = 15pF, Figures 6 and 7 (Note 6)                                  |       |       |     2 | ns      |
| Maximum Data Rate                                            | DR MAX      |                                                                       |    20 |       |       | Mbps    |
| Receiver Enable to Output High                               | t RZH       | R L = 1kΩ, C L = 15pF, MAX3485AE, MAX3491AE, Figure 8 (Note 7)        |       |       |    40 | ns      |
| Receiver Enable to Output Low                                | t RZL       | R L = 1kΩ, C L = 15pF, MAX3485AE, MAX3491AE, Figure 8 (Note 7)        |       |       |    40 | ns      |
| Receiver Disable Time from Low                               | t RLZ       | R L = 1kΩ, C L = 15pF, MAX3485AE, MAX3491AE, Figure 8                 |       |       |    40 | ns      |

│

+3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## Switching Characteristics MAX3485AE/MAX3490AE/MAX3491AE (continued)

(V CC =	+3V	to	+3.6V,	T A  = T MIN to T MAX , unless otherwise specified. Typical values are at V CC =	+3.3V	and	T A =	+25°C.)	(Notes	2,	3,	5)

| PARAMETER                                   | SYMBOL      | CONDITIONS                                            |   MIN | TYP   |   MAX | UNITS   |
|---------------------------------------------|-------------|-------------------------------------------------------|-------|-------|-------|---------|
| Receiver Disable Time from High             | t RHZ       | R L = 1kΩ, C L = 15pF, MAX3485AE, MAX3491AE, Figure 8 |       |       |    40 | ns      |
| Receiver Enable from Shutdown to Output     | t RLZ(SHDN) | R L = 1kΩ, C L = 15pF, MAX3485AE, Figure 8 (Note 7)   |       |       |     6 | µs      |
| High                                        | t RLZ(SHDN) | R L = 1kΩ, C L = 15pF, MAX3491AE, Figure 8            |       |       |   100 | µs      |
| Receiver Enable from Shutdown to Output Low | t RHZ(SHDN) | R L = 1kΩ, C L = 15pF, MAX3485AE, Figure 8 (Note 7)   |       |       |     6 | µs      |
|                                             | t RHZ(SHDN) | R L = 1kΩ, C L = 15pF, MAX3491AE, Figure 8            |       |       |   100 | µs      |
| Time to Shutdown                            | t SHDN      | (Note 8)                                              |    50 |       |   800 | ns      |

## Switching Characteristics (MAX3483AE/MAX3488AE)

(V CC =	+3V	to	+3.6V,	T A  = T MIN to T MAX , unless otherwise specified. Typical values are at V CC =	+3.3V	and	T A =	+25°C.)	(Notes	2,	3,	5)

| PARAMETER                                                    | SYMBOL      | CONDITIONS                                                 |   MIN | TYP   |   MAX | UNITS   |
|--------------------------------------------------------------|-------------|------------------------------------------------------------|-------|-------|-------|---------|
| DRIVER                                                       |             |                                                            |       |       |       |         |
| Driver Propagation Delay                                     | t DPLH      | R L = 54Ω, C L = 50pF, Figures 2 and 3                     |       |       |  1000 | ns      |
| Driver Propagation Delay                                     | t DPHL      | R L = 54Ω, C L = 50pF, Figures 2 and 3                     |       |       |  1000 | ns      |
| Driver Differential Output Rise or Fall Time                 | t HL , t LH | R L = 54Ω, C L = 50pF, Figures 2 and 3                     |   200 |       |   900 | ns      |
| Differential Driver Output Skew &#124;t DPLH - t DPHL &#124; | t DSKEW     | R L = 54Ω, C L = 50pF, Figures 2 and 3                     |       |       |   140 | ns      |
| Maximum Data Rate                                            | DR MAX      |                                                            |   250 |       |       | kbps    |
| Driver Enable to Output High                                 | t DZH       | R L = 110Ω, C L = 50pF, MAX3483AE Figures 4 and 5 (Note 6) |       |       |  2500 | ns      |
| Driver Enable to Output Low                                  | t DZL       | R L = 110Ω, C L = 50pF, MAX3483AE Figures 4 and 5 (Note 6) |       |       |  2500 | ns      |
| Driver Disable Time from Low                                 | t DLZ       | R L = 110Ω, C L = 50pF, MAX3483AE Figures 4 and 5          |       |       |   100 | ns      |
| Driver Disable Time from High                                | t DHZ       | R L = 110Ω, C L = 50pF, MAX3483AE Figures 4 and 5          |       |       |   100 | ns      |
| Driver Enable from Shutdown to Output High                   | t DLZ(SHDN) | R L = 110Ω, C L = 15pF, MAX3483AE Figures 4 and 5 (Note 6) |       |       |    10 | µs      |

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## +3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## Switching Characteristics (MAX3483AE/MAX3488AE) (continued)

(V CC =	+3V	to	+3.6V,	T A  = T MIN to T MAX , unless otherwise specified. Typical values are at V CC =	+3.3V	and	T A =	+25°C.)	(Notes	2,	3,	5)

| PARAMETER                                    | SYMBOL      | CONDITIONS                                                 |   MIN |   TYP |   MAX | UNITS   |
|----------------------------------------------|-------------|------------------------------------------------------------|-------|-------|-------|---------|
| Driver Enable from Shutdown to Output Low    | t DHZ(SHDN) | R L = 110Ω, C L = 15pF, MAX3483AE Figures 4 and 5 (Note 6) |       |       |   5.5 | µs      |
| Time to Shutdown                             | t SHDN      | (Note 8) MAX3483AE                                         |    50 |   340 |   700 | ns      |
| RECEIVER                                     |             |                                                            |       |       |       |         |
| Receiver Propagation Delay                   | t RPLH      | C L = 15pF, Figures 6 and 7                                |       |       |   200 | ns      |
| Receiver Propagation Delay                   | t RPHL      | C L = 15pF, Figures 6 and 7                                |       |       |   200 | ns      |
| Receiver Output Skew                         | t RSKEW     | C L = 15pF, Figures 6 and 7 (Note 6)                       |       |       |    30 | ns      |
| Maximum Data Rate                            | DR MAX      |                                                            |   250 |       |       | kbps    |
| Receiver Enable to Output High               | t RZH       | R L = 1kΩ, C L = 15pF, MAX3483AE Figure 8 (Note 6)         |       |       |    50 | ns      |
| Receiver Enable to Output Low                | t RZL       | R L = 1kΩ, C L = 15pF, MAX3483AE Figure 8 (Note 6)         |       |       |    50 | ns      |
| Receiver Disable Time from Low               | t RLZ       | R L = 1kΩ, C L = 15pF, MAX3483AE Figure 8                  |       |       |    50 | ns      |
| Receiver Disable Time from High              | t RHZ       | R L = 1kΩ, C L = 15pF, MAX3483AE Figure 8                  |       |       |    50 | ns      |
| Receiver Enable from Shutdown to Output High | t RLZ(SHDN) | R L = 1kΩ, C L = 15pF, MAX3483AE Figure 8 (Note 6)         |       |       |    10 | µs      |
| Receiver Enable from Shutdown to Output Low  | t RHZ(SHDN) | R L = 1kΩ, C L = 15pF, MAX3483AE Figure 8 (Note 6)         |       |       |    10 | µs      |
| Time to Shutdown                             | t SHDN      | (Note 8) MAX3483AE                                         |    50 |   340 |   800 | ns      |

Note 2: All devices 100% production tested at T A =	+25°C.	Specifications	over	temperature	are	guaranteed	by	design.

Note 3: All currents into the device are positive; all currents out of the device are negative. All voltages are referenced to ground, unless otherwise noted.

Note 4: ΔV OD and	ΔV OC are the changes in V OD  and V OC , respectively, when the DI input changes state.

Note 5: Capacitive load includes test probe and fixture capacitance.

Note 6: Guaranteed by design; not production tested.

Note 7: The timing parameter refers to the driver or receiver enable delay, when the device has exited the initial hot-swap protect state and is in normal operating mode.

Note 8: Shutdown is enabled by driving RE high and DE low. The device is guaranteed to have entered shutdown after t SHDN has elapsed.

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## Test and Timing Diagrams

Figure 1. Driver DC Test Load

<!-- image -->

+3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

Figure 2. Driver Timing Test Circuit

<!-- image -->

Figure 3. Driver Propagation Delays

<!-- image -->

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## +3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

<!-- image -->

Figure 4. Driver Enable and Disable Times (t DZH,  t DHZ )

Figure 5. Driver Enable and Disable Times (t DZL , t DLZ )

<!-- image -->

Figure 6. Receiver Propagation Delay Test Circuit

<!-- image -->

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

Figure 7. Receiver Propagation Delays

<!-- image -->

Figure 8. Receiver Enable and Disable Times

<!-- image -->

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## Typical Operating Characteristics

(V CC =	+3.3V,	T A =	+25 ° C, unless otherwise specified.)

<!-- image -->

<!-- image -->

<!-- image -->

+3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## +3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## Typical Operating Characteristics (continued)

(V CC =	+3.3V,	T A =	+25 ° C, unless otherwise specified.)

<!-- image -->

MAX3483AE/88AE DRIVER OUTPUT RISE AND FALL TIME vs. TEMPERATURE

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## Pin Configuration

<!-- image -->

## Pin Description

| PIN                 | PIN                 | PIN       | NAME   |                                                                                                                                                                                                                                                                                      |
|---------------------|---------------------|-----------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX3483AE MAX3485AE | MAX3488AE MAX3490AE | MAX3491AE | NAME   | FUNCTION                                                                                                                                                                                                                                                                             |
| -                   | -                   | 1, 8, 13  | N.C.   | No Connection. Not internally connected.                                                                                                                                                                                                                                             |
| 1                   | 2                   | 2         | RO     | Receiver Output. Drive RE low to enable RO. RO is always active on the MAX3488AE and MAX3490AE. RO is high when the receiver inputs (VA - VB) > -10mV and low when (VA -VB) ≤200mV. See the Function Tables.                                                                         |
| 2                   | -                   | 3         | RE     | Receiver Output Enable. Drive RE low, or leave unconnected, to enable RO. RO is high impedance when RE is high. Drive RE high and DE low to enter low-power shutdown mode. RE has a weak pulldown to GND.                                                                            |
| 3                   | -                   | 4         | DE     | Driver Enable. Drive DE high, or leave unconnected, to enable the driver outputs (Y and Z for full duplex, A and B for half duplex). The driver outputs are high impedance when DE is low. Drive RE high and DE low to enter low-power shutdown mode. DE has a weak pullup to V CC . |
| 4                   | 3                   | 5         | DI     | Driver Input. A low on DI forces the noninverting output (Y or A) low and the inverting output (Z or B) high. Similarly, a high on DI forces the noninverting output (Y or A) high and the inverting output (Z or B) low. See the Function Tables.                                   |
| 5                   | 4                   | 6, 7      | GND    | Ground                                                                                                                                                                                                                                                                               |
| -                   | 5                   | 9         | Y      | Noninverting Driver Output                                                                                                                                                                                                                                                           |
| -                   | 6                   | 10        | Z      | Inverting Driver Output                                                                                                                                                                                                                                                              |
| 7                   | 7                   | 11        | B      | Inverting Receiver Input/Driver Output (MAX3483AE/MAX3485AE). Inverting Receiver Input (MAX3488AE/MAX3490AE/MAX3491AE).                                                                                                                                                              |
| 6                   | 8                   | 12        | A      | Noninverting Receiver Input/Driver Output (MAX3483AE/MAX3485AE). Noninverting Receiver Input (MAX3488AE/MAx3490AE/MAX3491AE).                                                                                                                                                        |
| 8                   | 1                   | 14        | V CC   | Positive Supply. Bypass V CC to GND with a 0.1µF capacitor as close as possible to the IC.                                                                                                                                                                                           |

│

+3.3V-Powerd, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivrs

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

+3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## Function Tables (MAX3483AE, MAX3485AE)

| TRANSMITTING   | TRANSMITTING   | TRANSMITTING   | TRANSMITTING   | TRANSMITTING   | TRANSMITTING    |
|----------------|----------------|----------------|----------------|----------------|-----------------|
| INPUTS         | INPUTS         | INPUTS         | OUTPUTS        | OUTPUTS        | MODE            |
| RE             | DE             | DI             | B              | A              | MODE            |
| X              | 1              | 1              | 0              | 1              | Active          |
| X              | 1              | 0              | 1              | 0              | Active          |
| 0              | 0              | X              | High Impedance | High Impedance | Driver Disabled |
| 1              | 0              | X              | High Impedance | High Impedance | Shutdown        |

| RECEIVING   | RECEIVING   | RECEIVING    | RECEIVING      | RECEIVING         |
|-------------|-------------|--------------|----------------|-------------------|
| INPUTS      | INPUTS      | INPUTS       | OUTPUTS        | MODE              |
| RE          | DE          | A-B          | RO             |                   |
| 0           | X           | ≥ -10mV      | 1              | Active            |
| 0           | X           | ≤ -200mV     | 0              | Active            |
| 0           | X           | Open/Shorted | 1              | Active            |
| 1           | 1           | X            | High Impedance | Receiver Disabled |
| 1           | 0           | X            | High Impedance | Shutdown          |

## Function Tables MAX3491AE

| TRANSMITTING   | TRANSMITTING   | TRANSMITTING   | TRANSMITTING   | TRANSMITTING   |
|----------------|----------------|----------------|----------------|----------------|
| INPUTS         | INPUTS         | INPUTS         | OUTPUTS        | OUTPUTS        |
| RE *           | DE*            | DI             | Y              | Z              |
| X              | 1              | 1              | 1              | 0              |
| X              | 1              | 0              | 0              | 1              |
| 0              | 0              | X              | High-Impedance | High-Impedance |
| 1              | 0              | X              | Shutdown       | Shutdown       |

| RECEIVING   | RECEIVING   | RECEIVING    | RECEIVING      |
|-------------|-------------|--------------|----------------|
| INPUTs      | INPUTs      | INPUTs       | OUTPUT         |
| RE*         | DE*         | V A - V B    | RO             |
| 0           | X           | ≥ -10mV      | 1              |
| 0           | X           | ≤ -200mV     | 0              |
| 0           | X           | Open/Shorted | 1              |
| 1           | 1           | X            | High-Impedance |
| 1           | 0           | X            | Shutdown       |

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## Detailed Description

The  MAX3483AE/85AE  and  MAX3488AE/90AE/91AE family are 3.3V ESD-protected RS-485/RS-422 transceivers intended  for  half-duplex  or  full-duplex  communications. Integrated hot-swap functionality eliminates false transitions on the bus during power-up or hot insertion.

The device features fail-safe receiver inputs guaranteeing a logic-high receiver output when inputs are shorted or open. The  MAX3483AE/85AE  has  a  1-unit  load  receiver  input impedance, allowing up to 32 transceivers on the bus. The MAX3488AE/90AE/91AE has a 1/4-unit load receiver input impedance, allowing up to 128 transceivers on the bus.

## True Fail Safe

The  transceiver  family  guarantee  a  logic-high  receiver output when the receiver inputs are shorted or open, or when  they  are  connected  to  a  terminated  transmission line  with  all  drivers  disabled.  If  the  differential  receiver input voltage (A-B) is greater than or equal to -10mV, RO is logic-high.

## Driver Single-Ended Operation

The  driver  outputs  can  either  be  used  in  the  standard differential operating mode, or can be used as single-ended outputs.  Since  the  driver  outputs  swing  rail-to-rail,  they can	individually	be	used	as	standard	TTL	logic	outputs.

For half-duplex transceivers, driver outputs are A and B. For full-duplex transceivers, driver outputs are Y and Z.

## +3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## Hot-Swap Capability

## Hot-Swap Inputs

When	 circuit	 boards	 are	 inserted	 in	 a	 hot	 or	 powered backplane, disturbances on the enable inputs and differential receiver	inputs	can	lead	to	data	errors.	Upon	initial	circuit board  insertion,  the  processor  undergoes  its  power-up sequence. During this period, the processor output drivers are high impedance and are unable to drive the DE and RE inputs MAX3483AE/85AE/91AE to a defined logic level. Leakage	 currents	 up	 to	 10µA	 from	 the	 high-impedance outputs  of  a  controller  could  cause  DE  and RE to  drift to  an  incorrect  logic  state.   Additionally,  parasitic  circuit board capacitance could cause coupling of V CC or	GND to DE and RE . These factors could improperly enable the driver or receiver. The integrated hot-swap inputs help to avoid these potential problems.

When	V CC  rises,  an  internal  pulldown  circuit  holds  DE low and RE high. After the initial power-up sequence, the pulldown circuit becomes transparent, resetting the hotswap-tolerable inputs.

## Hot-Swap Input Circuitry

The DE and RE enable inputs feature hot-swap capability. At  the  input,  there  are  two  nMOS  devices,  M1  and  M2 (Figure 9 ).	 When	V CC ramps from 0V, an internal 10µs timer turns on M2 and sets the SR latch that also turns on M1. Transistors M2 (a 500µA current sink) and M1 (a 100µA	current	sink)	pull	DE	to	GND	through	a	5kΩ	(typ)

Figure 9. Simplified Structure of the Driver Enable (DE) Pin

<!-- image -->

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

resistor. M2 is designed to pull DE to the disabled state against an external parasitic capacitance up to 100pF that can drive DE high. After 10µs, the timer deactivates M2 while M1 remains on, holding DE low against three-state leakages that can drive DE high. M1 remains on until an external  source  overcomes  the  required  input  current. At	this	time,	the	SR	latch	resets	and	M1	turns	off.	When M1 turns off, DE reverts to a standard, high-impedance CMOS	input.	 Whenever	 V CC  drops  below  1V,  the  hotswap input is reset.

A  complementary  circuit  employing  two  pMOS  devices pulls RE to V CC .

## ±20kV ESD Protection

ESD  protection  structures  are  incorporated  on  all  pins to  protect  against  electrostatic  discharges  encountered during  handling  and  assembly.  The  driver  outputs  and receiver inputs have  extra  protection  against  static electricity. The ESD structures withstand high ESD in all states: normal operation, shutdown, and powered down. After an ESD event, the transceiver family keeps working without latch-up or damage.

ESD protection can be tested in various ways. The transmitter outputs and receiver inputs are characterized for protection to the following limits:

Figure 10. Human Body ESD Test Model

<!-- image -->

## +3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

-  ±20kV	HBM	using	JEDEC	JS-001-2014.
- ±15kV	using	the	Air-Gap	Discharge	method	specified in IEC 61000-4-2.
- ±8kV	using	the	Contact	Discharge	method	specified	in IEC 61000-4-2.

## ESD Test Conditions

ESD  performance  depends  on  a  variety  of  conditions. Contact Maxim for a reliability report that documents test setup, test methodology, and test results.

## Human Body Model (HBM)

Figure 10 shows the HBM, and Figure 11 shows the current waveform  it  generates  when  discharged  into  a  lowimpedance state. This model consists of a 100pF capacitor charged  to  the  ESD  voltage  of  interest,  which  is  then discharged	into	the	test	device	through	a	1.5kΩ	resistor.

## IEC 61000-4-2

The  IEC  61000-4-2  standard  covers  ESD  testing  and performance of finished equipment. However, it does not specifically  refer  to  integrated  circuits.  The  transceiver family helps in designing equipment to meet IEC 61000-4-2 without the need for additional ESD protection components.

The  major  difference  between  tests  done  using  the  HBM and IEC 61000-4-2 is higher peak current in IEC 61000-4-2 because series resistance is lower in the IEC 61000-4-2 model. Hence, the ESD withstand voltage measured to IEC 61000-4-2 is generally lower than that measured using the HBM.

Figure 11. Human Body Current Waveform

<!-- image -->

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

Figure  12  shows  the  IEC  61000-4-2  model,  and  Figure 13 shows the current waveform for IEC 61000-4-2 ESD Contact Discharge test.

## Applications Information

## Driver Output Protection

Two mechanisms prevent excessive output current  and power dissipation caused by faults or by bus connection. The  first,  a  current  limit  on  the  output  stage  provides immediate protection against short circuits over the whole common-mode  voltage  range.  The  second,  a  thermalshutdown  circuit,  forces  the  driver  outputs  into  a  highimpedance	state	if	the	die	temperature	exceeds	+160°C	(typ).

## Low-Power Shutdown Mode (MAX3483AE, MAX3485AE,MAX3491AE)

Low-power	shutdown	mode	is	initiated	by	bringing RE high and DE low. In shutdown, the devices draw less than 10µA of supply current.

Figure 12. IEC 61000-4-2 ESD Test Model

<!-- image -->

## +3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

RE and DE can be connected together and driven simultaneously.  The  transceiver  is  guaranteed  not  to  enter shutdown if RE is high and DE is low for less than 50ns. If the inputs are in this state for at least 800ns (max), the device is guaranteed to enter shutdown.

## Typical Applications

The transceiver family is designed for bidirectional data communications  on  multipoint  bus  transmission  lines. Figure 14 and Figure 15 show typical network application circuits. To minimize reflections, terminate the line at both ends  with  its  characteristic  impedance  and  keep  stub lengths off the main line as short as possible.

Figure 13. IEC 61000-4-2 ESD Generator Current Waveform

<!-- image -->

Figure 14. Typical Half-Duplex Application Circuit

<!-- image -->

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

+3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

Figure 15. Typical Full-Duplex RS-485 Network

<!-- image -->

│

## MAX3483AE/MAX3485AE/ MAX3488AE/MAX3490AE/ MAX3491AE

## Chip Information

PROCESS:	BiCMOS

## Ordering Information

| PART          | DUPLEX   | DATA RATE (MAX)   | PIN-PACKAGE   | PACKAGE CODE   | TEMPERATURE RANGE   |   NODES |
|---------------|----------|-------------------|---------------|----------------|---------------------|---------|
| MAX3483AEASA+ | Half     | 0.25Mbps          | 8 SO          | S8+2           | -40°C to +125°C     |      32 |
| MAX3485AEASA+ | Half     | 20Mbps            | 8 SO          | S8+2           | -40°C to +125°C     |      32 |
| MAX3488AEGSA+ | Full     | 0.25Mbps          | 8 SO          | S8+4           | -40°C to +105°C     |     128 |
| MAX3490AEGSA+ | Full     | 20Mbps            | 8 SO          | S8+4           | -40°C to +105°C     |     128 |
| MAX3491AEASD+ | Full     | 20Mbps            | 14 SO         | S14+1          | -40°C to +125°C     |     128 |

## +3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers

## Package Information

For  the  latest  package  outline  information  and  land  patterns (footprints), go to www.maximintegrated.com/packages .	Note that	a	'+',	'#',	or	'-'	in	the	package	code	indicates	RoHS	status only.	Package	drawings	may	show	a	different	suffix	character,	but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 8 SOIC         | S8+2           | 21-0041       | 90-0096            |
| 8 SOIC         | S8+4           | 21-0041       | 90-0096            |
| 14 SOIC        | S14+1          | 21-0041       | 90-0112            |

│

## MAX348AE/MAX3485AE/ MAX348AE/MAX3490AE/ MAX3491AE

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                     | PAGES CHANGED        |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
|                 0 | 3/16            | Initial release                                                                                                                                                 | -                    |
|                 1 | 9/17            | Updated General Description , Functional Diagram , Absolute Maximum Ratings , Electrical Characteristics table, various figures, and Ordering Information table | 1-6, 8, 10-12, 15-18 |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.	The	parametric	values	(min	and	max	limits) shown	in	the	Electrical	Characteristics	table	are	guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

+3.3V-Powered, ±20kV ESD-Protected, 20Mbps and Slew-Rate-Limited RS-485/RS-422 Transceivers