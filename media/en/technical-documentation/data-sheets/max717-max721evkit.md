<!-- lastmod 2022-08-04 -->
## MIXYIM

## Palmtop Computer and Flash Memory Power-Supply Regulators

## General Description

The MAX717-MAX721 CMOS power-supply ICs create microprocessorsystems.Eachdevicegenerates amain output (3Vor5V,selectable) and an auxiliaryoutputfor flash memory or PCMCIA (5V or 12V, selectable). Each device acceptsup to three input voltages.Power can come from a main battery (two or three alkaline or NiCad cells), a as an AC-DC wall adapter.

The MAx717-MAx721 provide three improvements over prior-art devices. Physical size is reduced -the high switching frequencies (up to 0.5MHz) made possible by MOSFET power transistors allowfortiny(&lt;5mm diameter) surfacemount magnetics. Efficiency is improved to 87% (10% better than with low-voltage regulators made in bipolar technology). And supply current is reduced to 60uA by CMOs construction and a unique constant-off-time pulsefrequency modulation (PFM) control scheme.

TheMAX717-MAX721differonlyinshutdownandstatus functions and in the choice of a 3.oV or 3.3V main output (see Device Options).

For LCD-bias applications requiring an adjustable negativevoltage,refer to the MAx722/MAX723 data sheet.

## Applications

Palmtop Computers

Flash-Memory/PCMCIA Power Supplies

Portable Data-Collection Equipment

Medical Instrumentation

PortableData Communicators

## Pin Configurations

MAXIM

<!-- image -->

| Features                                                              |                |
|-----------------------------------------------------------------------|----------------|
| ← Low 0.9V to 5.5V Battery Operating Range                            |                |
| ←Dual Regulated Outputs Main Output: 3.3V/5V Auxiliary Output: 5V/12V |                |
| ◆ 87% Efficiency at 200mA                                             |                |
| ← Efficiency PRAM Keep-Alive: 80% at 1mA ◆ 8W/in? Power Density       |                |
| ◆ 60μA Quiescent Current                                              |                |
| 20uA Shutdown Mode with VREF Alive (MAX720/MAX721 only)               | 717-721/EV Kit |
| ← 500kHz Maximum Switching Frequency                                  |                |
| ← ±1.5% VREF Tolerance Over Temp                                      |                |
| ← Detect Output Power Failures                                        |                |
| ◆ Detect Presence of AC Power                                         |                |
| ← 16-Pin Narrow SO Packages                                           |                |

## Ordering Information

| PART      | TEMP. RANGE   | PIN-PACKAGE   |
|-----------|---------------|---------------|
| MAX717CSE | 0°℃to+70℃     | 16 Narrow SO  |
| MAX717C/D | 0°℃ to +70℃   | Dice*         |

Ordering Information continued on last page.

- *Contactfactoryfordicespecifications.

## Typical Operating Circult

<!-- image -->

Maxim Integrated Products 1

## Palmtop Computer and Flash Memory Power-Supply Regulators

## ABSOLUTE MAXIMUM RATINGS

| Supply Voltage (V+ to GND)                      | ..+7V, -0.3V         | ContinuousPowerDissipation            |                   |
|-------------------------------------------------|----------------------|---------------------------------------|-------------------|
| Switch Voltage (LX3 to GND) ....                | ...+7V,-0.3V         | up to +70°℃ .                         | ..696mW           |
| Linear-Regulator Voltage (LIN to GND).          | ..+20V,-0.3V         | derate above +70°℃ .                  | .8.70mW/C         |
| FeedbackVoltage(FB12 to GND).....               | ..+13V, -0.3V        | OperatingTemperatureRanges:           |                   |
| AuxiliaryPin_Voltages                           |                      | MAX7__CSE                             | 0°C to +70°℃      |
| (12ON,3/5,12/5,SHDN,LXB,BKUP,VREF,              |                      | MAX7__ESE                             | -40°℃ to +85°℃    |
| PFO,DCIN,CS12,D12 toGND)...                     | -0.3V to (V+ + 0.3V) | JunctionTemperature                   | ...+150C          |
| Ground Voltage Difference(AGND to GND)......... | ..±0.3V              | StorageTemperatureRange               | . -65°C to +160°℃ |
| ReferenceCurrent(lvREF)....                     | 2.5mA                | LeadTemperature(soldering,10sec)..... | .·...+300°℃       |

Stressesbeyondthoselistedunder'AbsoluteMaximumRatings'maycausepermanentdamagetothedevice.Thesearestressratingsonly,andfunctional operationofthedeviceattheseoranyotherconditionsbeyondthoseindicatedintheoperationalsectionsofthespecificationsisnotimplied.Exposureto absolutemaximumratingconditionsforextendedperiodsmayaffectdevicereliability.

## ELECTRICAL CHARACTERISTICS

(Circuit of Figure 1,VBATT1 =VBATT2 = 2.5V,TA = TMIN to,TMAX,unless otherwise noted.)

| PARAMETER                                        | CONDITIONS                                                                                             |                          |                |   MIN | TYP   |   MAX | UNITS   |
|--------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------|----------------|-------|-------|-------|---------|
| Main Output Voltage- MainSMPS Mode               | 2V<VBATT1<3V, OmA<1LOAD<200mA, DCSOURCE=BKUP=OV (Note 1)                                               | 3/5 = 3V                 | MAX717/718/720 |  3.17 | 3.30  |  3.43 |         |
|                                                  |                                                                                                        |                          | MAX719/MAX721  |  2.88 | 3.00  |  3.12 |         |
|                                                  |                                                                                                        | 3/5=0V                   |                |  4.80 | 5.00  |  5.20 |         |
| MainOutputVoltage- Linear-Regulator Mode         | 7V<DCSOURCE<18V, OmA<ILOAD<500mA, BKUP = OV                                                            | 3/5 = 3V                 | MAX717/718/720 |  3.17 | 3.30  |  3.43 | V       |
|                                                  |                                                                                                        |                          | MAX719/MAX721  |  2.88 | 3.00  |  3.12 |         |
|                                                  |                                                                                                        | 3/5 = 0V                 |                |  4.80 | 5.00  |  5.20 |         |
| Main Output Voltage- Backup Mode                 | BKUP = 3V. 3/5 = 3V, OmA<ILOAD<1mA 2V<VBATT3<3V，                                                       |                          | MAX717/MAX718  |  3.17 | 3.30  |  3.43 | V       |
|                                                  |                                                                                                        |                          | MAX719         |  2.88 | 3.00  |  3.12 |         |
| Auxiliary Output Voltage                         | 2V<VBATT2<4V,                                                                                          |                          | 12/5 = 0V      |  4.80 | 5.00  |  5.20 | V       |
|                                                  |                                                                                                        | VBATT1 = 2.5V,ILOAD= 0mA | 12/5 = 3V      | 11.54 | 12.00 | 12.48 |         |
| Minimum Start-Up Supply Voltage(VBATT1)          | ILOAD = OmA                                                                                            |                          |                |       | 1.4   |   1.8 | V       |
| Minimum Start-Up Supply Voltage (DCIN)           |                                                                                                        |                          |                |       | 7.3   |   7.6 | V       |
| Current-SenseLimit Threshold                     | Measured at CS12, 3/5 =.3V                                                                             |                          |                |   170 | 200   |   230 | mv      |
| Drive Output Current                             | Measured at D12,3/5=3V                                                                                 |                          |                |       | ±150  |       | mA      |
| Linear-RegulatorOutput Sink Current              | LIN = 6V, 3/5 = 3V, measured at LIN                                                                    |                          |                |    20 | 50    |       | mA      |
| Quiescent SupplyCurrent from3VouT(Note2)         | 12ON = OV,3/5= 3V,BKUP = OV or 3V,FB3 forced to 3.47V (MAX717/718/720),FB3forcedto3.15V(MAX719/MAX721) |                          |                |       |       |    60 | μA      |
| BatteryQuiescentCurrent (VBATT1+VBATT2)          | 12ON = OV, 3/5 = 3V, BKUP = 0V or 3V                                                                   |                          |                |       | 09    |       | μA      |
| Shutdown Battery Current                         | MAX720/MAX721,SHDN=0V                                                                                  |                          |                |       | 20    |    40 | μA      |
| Battery Quiescent Current- Linear-Regulator Mode | DC source = 7V, 3/5 = 0V, measured at VBATT1                                                           |                          |                |   -10 |       |    10 | μA      |
| Current-Backup Mode Backup-BatteryQuiescent      | DC source = OV, BKUP = 3V, 3/5 = 3V, measured at VBATT3, forced to3V                                   |                          |                |       | 70    |       | μA      |
| Backup-Battery Current- Main Mode                | DC source =OV,BKUP=OV,3/5=OV,measured at VBATT3, forced to 3V                                          |                          |                |    -1 |       |     1 | mA      |

MAXIM

2

## Palmtop Computer and Flash Memory Power-Supply Regulators

## ELECTRICAL CHARACTERISTICS (continued)

(Circuit of Figure 1, VBATT1 =VBATT2 = 2.5V, TA = TMIN to TMAX,unless otherwise noted.)

| PARAMETER                                    | CONDITIONS                                              | MIN               |   TYP | MAX   |    |
|----------------------------------------------|---------------------------------------------------------|-------------------|-------|-------|----|
| Backup-Battery Current- Linear-RegulatorMode | DCsource=7V,3/5=0V,measured atVBATT3,forced to3V        | -1                |       | 1     | μA |
| Reference Voltage                            | No VREFload                                             | 1.23              |  1.25 | 1.27  | V  |
| Reference Load Regulation                    | 3/5=3V,-20μA<VREFload<250uA TA = +25°C                  |                   |    10 | 20    | mV |
| Reference Load Regulation                    | 3/5=3V,-20μA<VREFload<250uA TA = +25°C                  | TA = TMIN to TMAX |       | 25    | mV |
| Power-FailThreshold                          | 3/5=oVor3V,fallingedge,referred tono-load outputvoltage | -4                |    -6 | -8    | %  |
| Power-FailHysteresis                         | 3/5 = 0V or 3V                                          |                   |     2 |       | %  |
| PFO, DCIN Output Voltage Low                 | ISINK = 2mA, 3/5 = 12ON = 0V ‘                          |                   |       | 0.4   | V  |
| PFO, DCIN Output Current High                | VoUT = 2.8V, 3/5 = 3V                                   |                   |       | 1     | μA |
| Logic Input Voltage Low                      | Measuredat 12ON,12/5,BKUP,3/5.SHDN                      |                   |       | 0.4   | v  |
| Logic Input Voltage High                     | Measuredat12ON,12/5,BKUP,3/5,SHDN                       | 1.6               |       |       | V  |
| Logic Input Current                          |                                                         |                   |       | ±100  | nA |

Note 1: The main SMPS output voltage at fulload current is guaranteed by measuring LX3 switch on resistance and peak current-limit threshold.

directlywithactual batterysupplycurrent,butdecreasesinvalueaccordingtostep-upratioandefficiency.

## Typical Operating Characteristics

<!-- image -->

<!-- image -->

3

MAX717-721/EV Kit

## Palmtop Computer and Flash Memory Power-Supply Regulators

<!-- image -->

## Palmtop Computer and Flash Memory Power-Supply Regulators

<!-- image -->

## Palmtop Computer and Flash Memory Power-Supply Regulators

## Pin Description

| PIN    | PIN        | PIN        | NAME   | FUNCTION                                                                                                                                                                                        |
|--------|------------|------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX717 | MAX718/719 | MAX720/721 | NAME   | FUNCTION                                                                                                                                                                                        |
| 1      | 1          | 一          | BKUP   | Battery.Backup.WhenBKUP input ishigh,the lithiumbackupSMPSison and the main SMPS is off.                                                                                                        |
| 一      | 一          | 1          | SHDN   | If thelinearregulatorispoweredup,SHDNisoverridden. ShutdownInputdisablesbothSMPSs_whenlow,butthereferenceremainsalive.                                                                          |
| 2      | 2          | 2          | 12ON   | 12V SMPS On/Off Control Input enables the auxiliary (5V/12V) SMPS when high.                                                                                                                    |
| 二      |            |            | 3/5    | Selects themainoutputvoltagesetting:5Vwhenlow.                                                                                                                                                  |
| 3      | 二          | 4          | DCIN   | Detects presence of a DC souirce. Open-drain output; goes low when LIN is pulled high.                                                                                                          |
| 4      | 4          | 5          | 12/5   | Selects the auxiliaryoutputvoltagesetting,12Vwhen high.                                                                                                                                         |
| 5      | 5          | 6          | VREF   | 1.250VReferenceVoltageOutput.Bypasswith0.22uFcapacitortoAGND (0.1uFif thereisnoexternal referenceload).Maximumloadcapabilityis250uA source,20uA sink.                                           |
| 6      | 6          | 7          | AGND   | QuietAnalogGround                                                                                                                                                                               |
| 7      | 7          | 二          | LXB    | N-Channel MOSFETDrainforthelithiumbackupSMPS                                                                                                                                                    |
| 8      | 8          | 8          | FB3    | FeedbackInput forthemainoutput(forallmodes)                                                                                                                                                     |
| 6      | 9          | 6          | PFO    | put isoutofregulationby6%ormore.                                                                                                                                                                |
| 10     | 10         | 10         | FB12   | FeedbackInput for the auxiliary (+12V)SMPS                                                                                                                                                      |
| 11     | 11         | 11         | CS12   | Current-SenseInputforthe+12VSMPScontroller.200mVcorrespondswiththe maximumcurrent-limitthreshold.                                                                                               |
| 12     | 12         | 12         | D12    | Driverforthe+12VSMPSN-Channel PowerMOSFET.SwingsfromGND toV+.                                                                                                                                   |
| 13     | 13         | 13         | LIN    | Linear-RegulatorControllerOutputdrivesexternalPNPpasstransistor.Open- drainN-channeloutput.ThemainSMPSautomaticallyshutsoffwhenthevolt- ageat LINreaches7.3V,and turnsbackonwhenLiNfallsto6.5V. |
| 14     | 14         | 14         | GND    | PowerGround                                                                                                                                                                                     |
| 15     | 15         | 15         | LX3    | 1.2A,0.4QN-ChannelPowerMOSFETDrainforthe mainSMPS                                                                                                                                               |
| 16     | 16         | 16         | V+     | ICSubstrate,automaticallyswitchedtothemostpositiveofeitherthemainout- put or the auxiliary(+12V)output.Bypass toGNDwith 0.1μF.                                                                  |

## Possible Dua!-Output Voltage Combinations

Therefore,thosedeviceshaveatotalshutdownmodein place of thelow-powerlithium-backupSMPSmode.The MAX717 has no 5V setting for its main SMPS.

| Device   | Main jndino      | DCIN Detect Output   | Lithium- Backup Power Supply   | Shutdown   |
|----------|------------------|----------------------|--------------------------------|------------|
| MAX717   | 3.3V Fixed       | Yes                  | Yes                            | No         |
| MAX718   | 3.3V/5V Switched | No                   | Yes                            | No         |
| MAX719   | 3.0V/5V Switched | No                   | Yes                            | No         |
| MAX720   | 3.3V/5V Switched | Yes                  | No                             | Yes        |
| MAX721   | 3.0V/5V Switched | Yes                  | No                             | Yes        |

<!-- image -->

- ·3.3V and 5V
- ·3.3V and 12V
- ·5V and 12V
- ·5V and 5V (independently controlled)
- ·3.oVversionsareavailable.

## Device Options

Alldevicesincludeanidentical5V-/12V-selectableauxiliarySMPS,alinearregulator,aprecisionreference,and a power-fail detector. The MAX720 and MAX721 are intended for systems requiring direct battery switchover inbackupmodeinsteadofaregulatedbackupsupply.

6

## Palmtop Computer and Flash Me nory Power-Supply Regulators

Detalled Description

Operating Principle The MAx717 combines three step-up switch-mode regulators, a linearregulator, a precision voltage reference, a power-fail detector, and a DciN detector that indicates thepresenceofanexternalAC-DCsource(Figure 2).For maximum integration,theMAx717seriesICscontain an internal N-channel power MOSFET for the main iow-voltfor best efficiency, and has a very low gate-threshold age boost converter.This MOSFET is a*sense-fettype ditions (1.4V typ). The +12V auxiliary controller exploits an external logic-level N-channel MOSFET for the highervoltagerequirement.

Figure1.StandardApplicationCircuit

<!-- image -->

Figure2.MAx717-MAX721BlockDiagram

<!-- image -->

MAXIM

## Palmtop Computer and Flash Memory Power-Supply Regulators

## Pulse-Frequency Modulation Control Scheme

A unique minimum-off-time, current-limited, pulse-frequency modulation(PFM)control scheme is a keyfeature ofboth the main and auxiliary regulators (Figure 3). This PFM scheme combines the advantages of pulse-width modulation (PwM) (highoutputpowerand efficiency)withthoseofatraditional PFM pulse-skipper (ultra-low quiescent currents). There is no oscillator; switching is accomplished through a constant peak-current limit in the switch,which allows the inductor currenttoself-oscillatebetweenthispeak limit andsome lesser value. Switching frequency is governed by a pair of one-shots, which set a minimum off-time (1μs) and a maximum on-time (4μs). Under: light loads, the peak inductor current rises toabout one-half the current limit(for best light-load efficiency). Under heavy loads, the peak inductor current rises until it hits the current limit, whereupon the MOSFET switch turns off for the minimum off-time set by a one-shot.Continuous-conduction mode results, whichminimizes peak currents and component stresses for agiven load. The only disadvantage of this architecture compared to full PWM operation is the variable-frequency switching: noise. However,thenoise doesnot exceed the current limit times the filter capacitor equivalent series resistance (ESR), unlike conventional pulse-skippers.

## Main 3V/5V Switch-Mode Regulator

The main output voltage can be selected to 3.3V or 5V underlogiccontrol,orit canbeleft inonemodeor the other by tying 3/5 to ground or FB3. Efficiency varies dependingonthebattery and load, and istypicallybetter than 80%over a 1mA to 200mA load range. The device is internally bootstrapped; power to the device is derived from themainoutputvoltage(via FB3)ortheauxiliaryoutput voltage (via FB12), whichever is higher. When the output is results in lower switch-transistor on resistance and slightly greater output power. Bootstrapping allows the battery voltage'to sag to less than 1V once the system is started. Therefore, the battery voltage range is from VouT + Vdiode toless than1V (whereVdiode is the forward dropof the Schottky rectifier). If the battery voltage exceeds the programmed output voltage, the output will follow the battery voltage. In many systems this is acceptable; however, the outputvoltagemust notbeforced above7V.

The main regulator's peak-current limit is internally fixed at 1A ±0.2A. The switching frequency depends on load and input voltage, and can range as high as 50okHz for the main SMPS.

Figure3.MainSMPSBlockDiagram

<!-- image -->

8

## Palmtop Computer and Flash Memory Power-Supply Regulators

## Backup Switch-Mode Regulator

The backup switching-regulator output (MAx717, MAX718, and MAx719 only) is controlled by the main feedback resistors and comparator, and is otherwise very peak-current limit (5mA ±30%). It works well with tiny 1210-size 220μH chip inductors, but slightly better efficiencyandhigheroutputpowercanbeachievedwitha larger 1812-size 1mH inductor.

With lithium backup batteries, place an extra 1N914-type diode or resistor in series with D4 in order to comply with Underwriters Laboratories' guidelines for preventing accidental charging.

One method for extending the backup battery's life is to let the mainbatteries rest for a while, then switchback overuntil theoutputgoesoutofregulationagain.External control over the backup mode via BKUP (as opposed to automaticswitching)allowsdifferent strategiesformanaging the switchover to be controlled by the system microprocessor.

## Auxiliary 5V/12V Switch-Mode Controller

The auxiliary controller operates similarly to the main regulator,except thepower transistorand senseresistorareexternal,and themaximumon-timeissetat8us. The maximum possible output power is limited by the drive capability of D12. Do not use MOSFETs with greater than 20nC total gate charge, since excessive current drawn from D12 may upset the V+ substrate switchovercircuit.

The auxiliary regulator's efficiency is strongly influenced byresistive losses in the ESRof the input/output filter capacitors and the inductor.For highest efficiency,the ESR or DC resistance of each component must be less than30mQ.Use18AwGorheavierbuswireforthe battery andground connections.

The auxiliary SMPS peak-current limit (IPEAK) is set at 200mV/R1(170mVworst-caselow).The equationsbelow calculate R1 based on design parameters.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where Vp is the rectifier forward voltage and Vsw is the ing the drop across R1.

<!-- image -->

Example:

<!-- formula-not-decoded -->

## Powering the Auxillary Supply

Unlike the main output, the auxiliary output is not automaticallypowered from thelinearregulator.Themain --battery will continue to drain if the auxiliary supply is not turned off when an external DC source is applied. There are several alternative solutions:

1) Power the auxiliary supply from the main output all the time. This leads to compounded efficiency losses and increases the main output's total load,but is simple. These compounded losses are actually not crippling in many cases, especially if the main output is set at 5V.

If the input voltage is 5V when the 5V setting of the auxiliary supply is selected, the auxiliary output is noisy with over 0.5Vp-p noise in the standard application circuit. This excess noise is caused by the large amount of energy transferred witheachcycle,which is inturncaused by the low input-to-output differential voltage (5V to 5V plus a diode drop). So, if the auxiliary regulator must deliver high currents at 12V as well as good ripple when performing 5V-to-5V conversion, changes to the standard application circuit are needed. Either the input voltage to the auxiliary regulator's inductor must be stepped down with a series 1N4001 diode or similar means, or the filter capacitor on the auxiliary output must have very low ESR, preferably 0.02Q or less, and must be increased in value to 150uF or more.SeeCapacitorSelectionforrecommendations.

2) Power the auxiliary supply from the main output in linear-regulatormode,butpoweritfromthebatterywhen theDCsource is absent.Thisprovides thebestoverall efficiency, but requires a relay or MOsFET switch to make the switchover (Figure 4). In most applications, the batteryvoltageis toolow touseP-channeldevicesfor the switchover, but a high-side supply, such as the MAx623 charge-pump regulator (Figure 5), works well with Nchannelswitches.Switchovercanalsobeaccomplished with special AC-DC adapter plugs and jacks with built-in mechanicalswitches.

3) Use a battery charger that can supply a load while it charges the battery, such as the MAX713. This approach also eliminates the PNP pass transistor for the linear regulator.

## Palmtop Computer and Flash Memory Power-Supply Regulators

<!-- image -->

Figure4.SMTRelayPowersAuxiliary+12VSupply

Figure5.High-SideMOSFETSwitchPowersAuxiliary +12VSupply

<!-- image -->

Figure6.External LinearRegulatorPowersAuxiliary+12VSupply

<!-- image -->

## Linear Regulator

The linearregulator output drives thebase of an external PNP pass transistor through an open-drain output. This designreliesonarelativelyslowPNPtransistorforAC stability, so use a transistor with less than 1oMHz ft, or add a 1μFbase-emitter capacitor.Thebase-emitterresistor should be less than 1kQ, unless a low-leakage PNP pass transistor is used.

When constructed with a 2N2955 PNP transistor, the typical output-current capability is greater than 1A.

When the linear regulator operates, the mainSMPS is disabledsoasnottodrainthebattery.Thismodecannot be programmed, but occurs automatically when LiN is pulled high by the external DC source. Also, an opendrain status output (DCIN) goes low when the linear regulator turns on.

## Voltage Reference

The precision voltage reference is suitable for driving external loads such as a low-battery detection comparatororananalog-to-digitalconverter.Ithasguaranteed 250uAsource-currentand20uAsink-currentcapability. The reference is kept alive even in bagkup or full shutdownmodes.If thereferencedrivesanexternal load, bypass it with 0.22uF to ground. If the reference is unloaded, bypass it with 0.1μF minimum.

## Palmtop Computer and Flash Memory Power-Supply Regulators

## Status Outputs

Both status outputs (PFO and DCIN) are active-low, opencan be wire-ORed with external logic, they are protected against ESD damage byreverse-biased clamp diodes connecting to V+. If the status outputs are pulled up to external supplyvoltages above the main output voltage level,the pull-up resistor must limit the current through the ESD protection diode to 25μA or less to maintain regulation of the outputs.

The PFO comparator senses when the main output is more than6%outofregulation,and has2%hysteresis built in to prevent chatter. The PFO comparator is active in all modes except shutdown.

## Control-Logic Inputs

The control inputs (3/5, 12ON, 12/5, and BKUP/SHDN) are high-impedance MOS gates protected against ESD damage by normally reverse-biased clamp diodes. If these inputs are driven from signal sources that exceed the main. supplyvoltage (FB3),the diode current should be limited by a series resistor (1MΩ suggested). The logic inputthreshold level is the same (approximately tV) in both 3V and 5V modes. Do not leave the control inputs floating.

## Substrate Switchovor Circuit

The substrate (V+, pin 16) is powered from either the auxiliary+12Voutputorfromthemainoutput,whichever ishigher.The substrateserves as thepositive supplyrail for mostinternal circuitry,including thereference and the MOSFET driver (D12). When the auxiliary supply is on, an internal regulator forces V+ to 4V (to 5V if 12/5 is high or if 3/5 is low). Do not load V+. V+ must be bypassed to ground with at least 0.1μF.

## Inductor Selection

Theinductorsmusthave asaturation(incremental) currentratingequal to thepeakswitch-current limit, which is 1.2Aworst-case for themain output and useradjustableforthe auxiliaryoutput.However,it's.generally acceptable tobias the inductor deep into saturation by 20% or more.

The inductors' DC resistance significantly affects efficiency. For highest efficiency, limit L1's DC resistance to 0.03Q or less.

## Capacitor Selection

A 100μF, 10V surface mount (SMT) tantalum capacitor typically provides 50mV output ripple when stepping up 2V to 5V at 200mA.Smaller capacitors, down to 10μF, are acceptable for light loads or in applications that can tolerate higher 'aiddu ndino For the auxiliary output, a 47uF, 16V SMT tantalum capacitortypically provides 150mV output ripple when stepping up 3V to 12V at 60mA. Again, smaller capacitors are acceptable,andinthiscasetheminimumvaluedepends onthecurrent-limitresistorvalue.

<!-- image -->

The ESR of both bypass and filter capacitors affects efficiency.Bestperformanceis obtained bydoublingup on the filter capacitors or using specialized low-ESR capacitors. The smallest low-ESR SMT tantalum capacitorscurrentlyavailableareSprague595Dseries,which are about half the size of competing products.Sanyo Os-con organic semiconductor through-hole capacitors alsoexhibitverylowESR.

SPRAGUE: (603) 224-1961 or (207) 324-4140 SANYO: (619) 661-6322

## MOSFET Solection

The 12V SMPS MOSFET (Q1) must be a logic-level N-channeltypewithnomorethan20nCmaximumtotal gate charge. If a larger FET with more than 20nC total gate charge is used, D12 must be buffered with a MOSFETdriverICsuchasaMAx627.Gatedrivelevels on start-up are determined by the main SMPS's output SMPS may not start under heavy loads (&gt;100mW) unlesstheMOSFET has a verylowthreshold(forexample: Motorola MTD3055EL, VTH = 2V max). The Siliconix Si9942 MOSFET contains an extra P-channel FET that is useful as a load switch.

## PC Layout and Grounding

The MAx717's high peak currents and high-frequency operation make PC layout important for minimizing ground bounce and noise. Use Figure 7's PC layoutasaroughguideforcomponentplacement andgroundconnections.Thedistancebetweenthe MAx717's GND and the ground leads of C1 and C5 must be kept to less than 0.2" (5mm). If possible, use a ground plane.

## 3-Coll Appllcations

Higher input voltages increase the energy transferred witheachcycle,dueto thereduced input/outputdifferential. Minimize excess ripple due to increased energy transfer by reducing the inductor value (1GμH suggested). Add extra filtering and recalculate the auxiliary regulator'scurrent-limitresistorvalueaccording to the equations intheAuxiliary5V/12VSwitch-ModeController section.

## MAX718 Evaluation Kit

## EV Kit General Description

The MAx718 evaluation kit (EV kit) is an assembled surface-mountdemonstrationboard.Thekitembodies the standard 2-cell application circuit of Figure 1, and adds a DIP switch and 3MΩ pull-up resistors for each control input.A MAx718comesinstalledon theboard, butitals0accomodatesaMAx717orMAx719footprint. ToreplacetheMAx718IC,firstcuttheleadsfreeofthe package, then carefully desolder the leads individually.

## Operating Instructions

For highest efficiency, connect heavy-gauge (18AwG) stranded wire from the battery terminals to a 2A adjustable supply or 2-cell battery pack.

(Circuit of Figure 1)

Important: Connect BATT1 and BATT2 together with heavy wire to ensure both SMPS regulators work. If BATT1 is powered separately from BATT2, connect an extra input bypass capacitor across BATT1(not included). Otherwise, there is no filtering at BATT1 and poor efficiency results.

Adjust the supply up to two or three volts. Set the BKUP and 3/5 switches low, and measure the main output voltage. Load the outputs and observe the switching waveforms atLx3andD12.

## MAX718 EV Kit Componont List

| DESIGNATION   |   QTY | DESCRIPTION                                   | SOURCE                               |
|---------------|-------|-----------------------------------------------|--------------------------------------|
| C1            |     1 | 100uF, 10V E-size SMT tantalum capacitor      | Matsuo 267M1002-107                  |
| C2            |     1 | 47uF, 16V E-size SMT tantalum capacitor       | Matsuo 267M1602-476                  |
| C3            |     1 | 0.22uF 1206-size ceramic capacitor            | Murata-ErieGRM42-6X7R224K025V        |
| C4            |     1 | 0.1μF1206-size ceramic capacitor              | Murata-ErieGRM42-6X7R104K025V        |
| C5            |     1 | 150uF,6.3VE-size SMT tantalumcapacitor        | Matsuo267M6301-157                   |
| L1, L2        |     2 | 22uH,1A SMT inductors                         | Sumida CD54-220                      |
| L3            |     1 | 220uH 1210-size chip inductor                 | Sprague GLA22110                     |
| R1            |     1 | 0.22Ω±10%1206-sizechipresistor                | OhmtekL1206LR220LBT or IMS RC-I-1206 |
| R2            |     1 | 330Ω±5%1206-size chipresistor                 |                                      |
| D1,D2         |     2 | 1ASchottkyrectifiers,1N5817equivalent         | NIEC EC15QS02L                       |
| D3            |     1 | 1A silicon rectifier, 1N4001 equivalent       | NIEC EC10DS1                         |
| D4            |     1 | Signal diode                                  | Motorola1N4148or1N914                |
| Q1            |     1 | 0.25Ωlogic-level N-channel MOSFET,SO-8package | 1/2 Siliconix Si9942DY.              |
| Q2            |     1 | Power PNP transistor, D-PAK                   | Motorola MJD2955                     |

IMS Matsuo USA Matsuo Japan Motorola Murata-Erie NIEC

(401) 683-9700

NIEC Japan

(81) 3-3494-7411

(714) 969-2491

Ohmtek

(716) 283-4025

(06)332-0871

Siliconix

(408) 988-8000

(602) 244-6900

Sprague

(516) 746-1385

(404) 436-1300

Sumida USA

(708) 956-0666

(805) 867-2555

Sumida Japan

(03) 3607-5111

<!-- image -->

MAXIM

## MAx718 Evaluation Kit

<!-- image -->

## MAx718 Evaluation Kit

<!-- image -->

MAXIM

## MAX718 Evaluation Kit

Figure9.MAx718EVKitComponentPlacementDiagram

<!-- image -->

## MAX718 Evaluation Kit

Figure10.MAx718EVKIT-SOcanalsobefittedfortheMAx717 andMAX719.

<!-- image -->

## Ordoring Informatlon (continued)

| PART           | TEMP. RANGE    | PIN-PACKAGE                   |
|----------------|----------------|-------------------------------|
| MAX717ESE      | -40'℃to +85'℃  | 16 NarrowSO                   |
| MAX718CSE      | 0'C to +70°℃   | 16 NarrowSO                   |
| MAX718C/D      | 0'C to+70℃     | Dice*                         |
| MAX718ESE      | -40'℃ to +85'℃ | 16 NarrowSO                   |
| MAX719CSE      | 0'C to +70'℃   | 16 NarrowSO                   |
| MAX719C/D      | 0'C to +70'℃   | Dice*                         |
| MAX719ESE      | -40'℃ to +85°℃ | 16 NarrowSO                   |
| MAX720CSE      | 0°℃ to+70'℃    | 16 NarrowSO                   |
| MAX720C/D      | 0'℃ to +70'℃   | Dice*                         |
| MAX720ESE      | -40'C to +85°℃ | 16 Narrow SO                  |
| MAX721CSE      | o°℃ to +70'℃   | 16NarrowSO                    |
| MAX721C/D      | 0'C to+70'℃    | Dice*                         |
| MAX721ESE      | -40°℃ to +85°℃ | 16 Narrow SO                  |
| MAX718EVKIT-SO | 0°℃ to +70°℃   | Surface-Mount EvaluationBoard |

## Pin Conflgurations (continued)

<!-- image -->

Chip Topography

<!-- image -->

(2.032mm)

"MAX717MAX718/MAX719ONLY.

**MAX717/MAX720/MAX721ONLY.

↑ALLEXCEPT MAX717.

SUBSTRATECONNECTEDTOV+; TRANSISTORCOUNT:764.

MaximcannotassumeresponsibilityforuseofanycircuitryotherthancircuitryentirelyembodiedinaMaximproduct.Nocircuitpatent licensesareimplied.

16

Mexim integrated Products, 120 San Gabriel Drive, Sunnyvale, CA 94086 (408) 737-7600

MMxiMisaregisteredtrademarkofMaximIntegratedProducts.